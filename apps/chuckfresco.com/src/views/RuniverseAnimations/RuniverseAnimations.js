import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Select, MenuItem, Slider } from '@material-ui/core';
import gifshot from 'gifshot';
import { trackEvent } from 'utils/analytics';

const CANVAS_SIZE = 400;

const useStyles = makeStyles(() => ({
  container: {
    padding: '40px 20px',
    background: '#0c133e',
    color: '#fff',
    fontFamily: 'monospace',
  },
  previewBox: {
    background: '#1b2349',
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    border: '1px solid #555',
  },
  canvas: {
    display: 'block',
    margin: '10px auto',
  },
  fileInput: {
    display: 'block',
    marginTop: 20,
    color: '#fff'
  },
  buttonGroup: {
    marginTop: 20,
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
  },
  slider: {
    color: '#FFD700',
    marginTop: 20,
  }
}));

const RuniverseAnimations = () => {
  const handleExtendedGifDownload = () => {
    if (!jsonData || !image || !selectedTag) return;
    const ctx = canvasRef.current.getContext('2d');
    const tag = jsonData.meta.frameTags.find(t => t.name === selectedTag);
    const frameIds = Array.from({ length: tag.to - tag.from + 1 }, (_, i) => (tag.from + i).toString());

    const frameImages = [];
    const durationPerLoop = (frameIds.length * jsonData.frames[frameIds[0]].duration / 1000) / speedMultiplier;
    const loopCount = Math.ceil(30 / durationPerLoop);

    for (let i = 0; i < loopCount; i++) {
      frameIds.forEach((id) => {
        const frameData = jsonData.frames[id];
        const { x, y, w, h } = frameData.frame;
        const cx = (CANVAS_SIZE - w * 2) / 2;
        const cy = (CANVAS_SIZE - h * 2) / 2;

        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(image, x, y, w, h, cx, cy, w * 2, h * 2);

        const dataURL = canvasRef.current.toDataURL('image/png');
        frameImages.push(dataURL);
      });
    }

    gifshot.createGIF({
      transparent: 'rgba(0,0,0,0)',
      images: frameImages,
      gifWidth: CANVAS_SIZE,
      gifHeight: CANVAS_SIZE,
      interval: (jsonData.frames[frameIds[0]].duration / 1000) / speedMultiplier,
    }, (obj) => {
      if (!obj.error) {
        const link = document.createElement('a');
        link.href = obj.image;
        link.download = `${selectedTag}_extended.gif`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        trackEvent('download_runiverse_animation', {
          animation_tag: selectedTag,
          format: 'gif',
          duration: 'extended'
        });
      } else {
        alert('Extended GIF creation failed.');
        console.error(obj.errorMsg);
      }
    });
  };
  const classes = useStyles();
  const canvasRef = useRef(null);
  const [jsonData, setJsonData] = useState(null);
  const [image, setImage] = useState(null);
  const [selectedTag, setSelectedTag] = useState('');
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  const animationRef = useRef();
  const lastTimeRef = useRef(0);
  const frameIndexRef = useRef(0);
  const frameIdsRef = useRef([]);

  const handleJsonUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const parsed = JSON.parse(event.target.result);
      setJsonData(parsed);
      const defaultTag = parsed.meta.frameTags[0]?.name || '';
      setSelectedTag(defaultTag);
    };
    reader.readAsText(file);
  };

  const handlePngUpload = (e) => {
    const file = e.target.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => setImage(img);
  };

  const handleReset = () => {
    if (jsonData?.meta?.frameTags?.length > 0) {
      setSelectedTag(jsonData.meta.frameTags[0].name);
      frameIndexRef.current = 0;
    }
  };

  const handleGifDownload = () => {
    if (!jsonData || !image || !selectedTag) return;
    const ctx = canvasRef.current.getContext('2d');
    const tag = jsonData.meta.frameTags.find(t => t.name === selectedTag);
    const frameIds = Array.from({ length: tag.to - tag.from + 1 }, (_, i) => (tag.from + i).toString());

    const frameImages = [];

    frameIds.forEach((id) => {
      const frameData = jsonData.frames[id];
      const { x, y, w, h } = frameData.frame;
      const cx = (CANVAS_SIZE - w * 2) / 2;
      const cy = (CANVAS_SIZE - h * 2) / 2;

      ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); // preserves transparency
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(image, x, y, w, h, cx, cy, w * 2, h * 2);

      const dataURL = canvasRef.current.toDataURL('image/png');
      frameImages.push(dataURL);
    });

    gifshot.createGIF({
      transparent: 'rgba(0,0,0,0)',
      images: frameImages,
      gifWidth: CANVAS_SIZE,
      gifHeight: CANVAS_SIZE,
      interval: (frameImages.length ? (jsonData.frames[frameIds[0]].duration / 1000) / speedMultiplier : 0.1),
    }, (obj) => {
      if (!obj.error) {
        const link = document.createElement('a');
        link.href = obj.image;
        link.download = `${selectedTag}.gif`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        trackEvent('download_runiverse_animation', {
          animation_tag: selectedTag,
          format: 'gif',
          duration: 'standard'
        });
      } else {
        alert('GIF creation failed.');
        console.error(obj.errorMsg);
      }
    });
  };

  useEffect(() => {
    if (!jsonData || !image || !selectedTag) return;
    const ctx = canvasRef.current.getContext('2d');
    const tag = jsonData.meta.frameTags.find(t => t.name === selectedTag);
    frameIdsRef.current = Array.from({ length: tag.to - tag.from + 1 }, (_, i) => (tag.from + i).toString());
    frameIndexRef.current = 0;

    const loop = (timestamp) => {
      const frameId = frameIdsRef.current[frameIndexRef.current];
      const frameData = jsonData.frames[frameId];
      const { x, y, w, h } = frameData.frame;
      const cx = (CANVAS_SIZE - w * 2) / 2;
      const cy = (CANVAS_SIZE - h * 2) / 2;

      ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(image, x, y, w, h, cx, cy, w * 2, h * 2);

      if (timestamp - lastTimeRef.current > frameData.duration / speedMultiplier) {
        frameIndexRef.current = (frameIndexRef.current + 1) % frameIdsRef.current.length;
        lastTimeRef.current = timestamp;
      }

      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationRef.current);
  }, [jsonData, image, selectedTag, speedMultiplier]);

  return (
    <div className={classes.container}>
      <Typography variant="h4" style={{ color: '#FFD700' }}>Runiverse Animation</Typography>

      <input type="file" accept="application/json" onChange={handleJsonUpload} className={classes.fileInput} />
      <input type="file" accept="image/png" onChange={handlePngUpload} className={classes.fileInput} />

      {jsonData && image && (
        <div className={classes.previewBox}>
          <Typography variant="h6">Select Animation:</Typography>
          <Select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            style={{ background: '#333', color: '#fff', marginTop: 10 }}
          >
            {jsonData.meta.frameTags.map(tag => (
              <MenuItem key={tag.name} value={tag.name}>{tag.name}</MenuItem>
            ))}
          </Select>

          <Slider
            className={classes.slider}
            value={speedMultiplier}
            onChange={(e, val) => setSpeedMultiplier(val)}
            step={0.1}
            min={0.1}
            max={3}
            valueLabelDisplay="auto"
          />
          <Typography align="center">Speed Multiplier: {speedMultiplier.toFixed(1)}x</Typography>

          <canvas ref={canvasRef} className={classes.canvas} width={CANVAS_SIZE} height={CANVAS_SIZE} />

          <div className={classes.buttonGroup}>
            <Button variant="outlined" onClick={handleGifDownload} style={{ color: '#FFD700', borderColor: '#FFD700' }}>
              Download GIF
            </Button>
            <Button variant="outlined" onClick={handleExtendedGifDownload} style={{ color: '#00FFFF', borderColor: '#00FFFF' }}>
              Download Extended GIF
            </Button>
            <Button variant="outlined" onClick={handleReset} style={{ color: '#ff4444', borderColor: '#ff4444' }}>
              Reset
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RuniverseAnimations;
