import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const sunflowerLogo = "/assets/sunflower-land/logo/logo_v2.png";
const skillAsset = file => `/assets/sunflower-land/skills/${file}`;
const machineryAsset = file => `/assets/sunflower-land/skills/machinery/${file}`;
const commonSkillAsset = file => `/assets/sunflower-land/skills/common/${file}`;

const machinerySkills = [
  { id: "crop-extension-module-i", name: "Crop Extension Module I", file: "skill-Crop-Extension-Module-I.png", tier: 1, description: "Allows Rhubarb and Zucchini seeds to be used in the Crop Machine." },
  { id: "crop-processor-unit", name: "Crop Processor Unit", file: "skill-crop-processor-unit.png", tier: 1, description: "×0.95 Crop Machine growth time.", downside: "+10% Oil consumption in the Crop Machine." },
  { id: "oil-gadget", name: "Oil Gadget", file: "skill-oil-gadget.png", tier: 1, description: "×0.9 Oil consumption in the Crop Machine." },
  { id: "oil-extraction", name: "Oil Extraction", file: "skill-oil-extraction.webp", tier: 1, description: "+1 Oil when collecting from reserves." },
  { id: "leak-proof-tank", name: "Leak-Proof Tank", file: "skill-leak-proof-tank.png", tier: 1, description: "Triples the oil tank capacity in the Crop Machine." },
  { id: "crop-extension-module-ii", name: "Crop Extension Module II", file: "skill-Crop-Extension-Module-II.png", tier: 2, description: "Allows Carrot and Cabbage seeds to be used in the Crop Machine." },
  { id: "crop-extension-module-iii", name: "Crop Extension Module III", file: "skill-Crop-Extension-Module-III.png", tier: 2, description: "Allows Yam and Broccoli seeds to be used in the Crop Machine." },
  { id: "rapid-rig", name: "Rapid Rig", file: "skill-rapid-rig.png", tier: 2, description: "×0.8 Crop Machine growth time.", downside: "+40% Oil consumption in the Crop Machine." },
  { id: "oil-be-back", name: "Oil Be Back", file: "skill-oil-be-back.png", tier: 2, description: "×0.8 Oil refill time." },
  { id: "oil-rig", name: "Oil Rig", file: "skill-oil-rig.webp", tier: 2, description: "The Oil Drill requires 20 Wool instead of Leather to craft." },
  { id: "field-expansion-module", name: "Field Expansion Module", file: "skill-Field-Expansion-Module.png", tier: 3, description: "+5 packs added to the machine queue system." },
  { id: "field-extension-module", name: "Field Extension Module", file: "skill-Field-Extension-Module.png", tier: 3, description: "+5 plots added to the machine." },
  { id: "efficiency-extension-module", name: "Efficiency Extension Module", file: "skill-Efficiency-Extension-Module.png", tier: 3, description: "×0.7 Oil consumption in the Crop Machine." },
  { id: "grease-lightning", name: "Grease Lightning", file: "skill-grease-lightning.png", tier: 3, description: "Ability to make empty oil wells instantly refill." },
];

const upgradePointCosts = { 1: 1, 2: 3, 3: 6 };
const upgradeShardCosts = { 1: 1, 2: 2, 3: 3 };
const pointsForRank = (skill, rank) => rank === 0 ? 0 : skill.tier + Math.max(0, rank - 1) * upgradePointCosts[skill.tier];
const shardsForRank = (skill, rank) => Math.max(0, rank - 1) * upgradeShardCosts[skill.tier];

const skillGroups = [
  { id: "machinery", name: "Machinery", file: "machinery-skills.png", counts: [5, 5, 4] },
  { id: "greenhouse", name: "Greenhouse", file: "greenhouse-skills.png", counts: [4, 4, 4] },
  { id: "bee-flower", name: "Bees & Flowers", file: "bee-flower-skills.png", counts: [4, 4, 4] },
  { id: "animal", name: "Animals", file: "animal-skills.png", counts: [7, 6, 6] },
  { id: "fruit", name: "Fruit Patch", file: "fruit-skills.png", counts: [5, 4, 4] },
  { id: "aging", name: "Aging", file: "aging-skills.png", counts: [5, 3, 2] },
  { id: "compost", name: "Compost", file: "compost-skills.png", counts: [6, 5, 2] },
  { id: "cooking", name: "Cooking", file: "cooking-skills.png", counts: [4, 4, 4] },
  { id: "mining", name: "Mining", file: "mining-skills.png", counts: [5, 5, 5] },
  { id: "fishing", name: "Fishing", file: "fishing-skills.png", counts: [4, 3, 3] },
  { id: "trees", name: "Trees", file: "trees-skills.png", counts: [4, 3, 2] },
  { id: "crops", name: "Crops", file: "crop-skills.png", counts: [6, 5, 3] },
];

const buildInitialSelection = () => skillGroups.reduce((result, group) => ({
  ...result,
  [group.id]: { enabled: true, tiers: [0, 0, 0], skillRanks: {} },
}), {});

const useStyles = makeStyles(theme => ({
  page: { minHeight: "100vh", background: "#27364c", padding: "0 4px 46px", color: "#332235" },
  hero: { width: "calc(100% + 8px)", minHeight: 288, margin: "0 -4px", padding: "34px 12px 30px", background: "linear-gradient(90deg,rgba(39,54,76,.98),rgba(77,104,66,.9) 48%,rgba(201,88,57,.66)),#27364c", borderBottom: "5px solid #101018", display: "flex", alignItems: "center", [theme.breakpoints.down("xs")]: { minHeight: 250, paddingTop: 26, paddingBottom: 24 } },
  heroInner: { width: "100%", maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, [theme.breakpoints.down("sm")]: { flexDirection: "column", alignItems: "flex-start" } },
  heroTitle: { color: "#fff8d6", font: "900 46px/1 'Courier New',monospace", margin: 0, textShadow: "3px 3px 0 rgba(16,16,24,.4)", [theme.breakpoints.down("xs")]: { fontSize: 34 } },
  heroSubtitle: { color: "#fff8d6", maxWidth: 710, font: "900 18px/1.35 'Courier New',monospace", margin: "12px 0 0" },
  logoPanel: { flex: "0 0 auto", background: "#e8ad76", border: "5px solid #101018", borderRadius: 14, boxShadow: "inset 0 0 0 4px #f8d29b,8px 8px 0 rgba(0,0,0,.24)", padding: "18px 22px", transform: "rotate(1.5deg)", [theme.breakpoints.down("sm")]: { transform: "none" } },
  logo: { width: 280, maxWidth: "62vw", display: "block", imageRendering: "pixelated" },
  nav: { width: "calc(100% + 8px)", margin: "0 -4px 18px", padding: "8px 12px", borderBottom: "4px solid #101018", display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" },
  navLink: { minHeight: 32, display: "inline-flex", alignItems: "center", color: "#fff8d6", background: "#1f5da8", border: "3px solid #101018", borderRadius: 8, font: "900 18px/1 SmallestPixel7,'Courier New',monospace", padding: "4px 12px", textDecoration: "none", "&:hover": { color: "#fff8d6", textDecoration: "none", filter: "brightness(1.08)" } },
  shell: { maxWidth: 1800, margin: "0 auto", fontFamily: "'Courier New',monospace" },
  calculator: { position: "sticky", top: 8, zIndex: 5, display: "grid", gridTemplateColumns: "minmax(190px,1.2fr) repeat(5,minmax(96px,.5fr)) auto", gap: 9, alignItems: "center", marginBottom: 18, padding: 13, background: "#e8ad76", border: "4px solid #101018", borderRadius: 14, boxShadow: "inset 0 0 0 4px #f8d29b,8px 8px 0 rgba(0,0,0,.22)", [theme.breakpoints.down("md")]: { gridTemplateColumns: "repeat(4,1fr)" }, [theme.breakpoints.down("sm")]: { position: "static", gridTemplateColumns: "repeat(2,1fr)" }, [theme.breakpoints.down("xs")]: { gridTemplateColumns: "1fr" } },
  calcIntro: { minWidth: 0 },
  calcTitle: { margin: 0, fontSize: 25, fontWeight: 900 },
  calcCopy: { margin: "4px 0 0", fontSize: 12, fontWeight: 900, lineHeight: 1.35 },
  stat: { minHeight: 72, display: "flex", flexDirection: "column", justifyContent: "center", padding: "9px 12px", background: "#fff0bd", border: "3px solid #332235", borderRadius: 9, boxShadow: "inset 0 0 0 2px #ffe5a4" },
  statLabel: { fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1 },
  statValue: { fontSize: 29, lineHeight: 1.1, fontWeight: 900 },
  remainingNegative: { color: "#a51e2d" },
  budgetInput: { width: "100%", minWidth: 80, marginTop: 3, padding: "3px 7px", color: "#332235", background: "#fff8d6", border: "2px solid #332235", borderRadius: 5, font: "900 25px/1 'Courier New',monospace" },
  resetButton: { minHeight: 45, padding: "8px 14px", color: "#fff8d6", background: "#9b392f", border: "3px solid #101018", borderRadius: 8, cursor: "pointer", font: "900 15px/1 'Courier New',monospace", boxShadow: "inset 0 0 0 2px #df6a45" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 12, [theme.breakpoints.down("md")]: { gridTemplateColumns: "repeat(2,minmax(0,1fr))" }, [theme.breakpoints.down("sm")]: { gridTemplateColumns: "1fr" } },
  card: { overflow: "hidden", background: "#e8ad76", border: "4px solid #101018", borderRadius: 14, boxShadow: "inset 0 0 0 4px #f8d29b,8px 8px 0 rgba(0,0,0,.22)" },
  machineryCard: {},
  cardDisabled: { opacity: .62, filter: "grayscale(.65)" },
  cardHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "13px 16px", borderBottom: "4px solid rgba(51,34,53,.25)" },
  cardTitle: { margin: 0, fontSize: 23, fontWeight: 900 },
  categoryTotal: { display: "block", marginTop: 2, fontSize: 12, fontWeight: 900 },
  toggle: { display: "inline-flex", alignItems: "center", gap: 7, padding: "6px 9px", color: "#fff8d6", background: "#178f5a", border: "3px solid #101018", borderRadius: 8, cursor: "pointer", font: "900 13px/1 'Courier New',monospace", whiteSpace: "nowrap" },
  toggleOff: { background: "#75516a" },
  imageWrap: { padding: 10, background: "#d99b67" },
  skillImage: { width: "100%", display: "block", background: "#e4a36e", border: "3px solid #332235", borderRadius: 7, imageRendering: "pixelated" },
  machineryBoard: { padding: "12px 8px 16px", background: "#e5a46f", borderBottom: "4px solid rgba(51,34,53,.25)", overflow: "hidden" },
  machineryHint: { margin: "0 0 8px", color: "#34263d", font: "700 13px/1.2 SkillsHint,'Courier New',monospace" },
  machineryTier: { marginTop: 10, "&:first-of-type": { marginTop: 0 } },
  machineryTierLabel: { display: "inline-flex", alignItems: "center", minHeight: 27, margin: "0 0 7px", padding: "2px 9px", color: "#252536", background: "#dce4f3", border: "3px solid #101018", boxShadow: "inset 0 0 0 2px #f7f8ff,3px 3px 0 rgba(16,16,24,.28)", font: "400 20px/1 SkillsSecondary,'Courier New',monospace" },
  lockedTier: {},
  lockBadge: { display: "inline-flex", alignItems: "center", minHeight: 24, margin: "0 0 7px 10px", padding: "2px 7px", color: "#fff8d6", background: "#75516a", border: "2px solid #101018", borderRadius: 4, font: "700 11px/1 SkillsHint,'Courier New',monospace", verticalAlign: "middle" },
  machineryRow: { display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: 5, alignItems: "stretch" },
  skillSlot: { position: "relative", width: "100%", minWidth: 0, display: "block" },
  skillButton: { position: "relative", width: "100%", minWidth: 0, height: 134, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: 3, padding: "17px 2px 5px", color: "#fff8d6", backgroundColor: "transparent", backgroundPosition: "center 4px", backgroundRepeat: "no-repeat", backgroundSize: "72px 78px", border: 0, borderRadius: 0, boxShadow: "none", cursor: "pointer", filter: "grayscale(1)", opacity: .5, touchAction: "manipulation", userSelect: "none", WebkitUserSelect: "none", WebkitTouchCallout: "none", transition: "transform .12s ease,filter .12s ease,opacity .12s ease,outline-color .12s ease", "&:hover": { opacity: .8, transform: "translateY(-1px)" }, "&:focus-visible": { outline: "3px solid #fff2a8", outlineOffset: 2 } },
  lockedSkill: { cursor: "not-allowed", "&:hover": { opacity: .5, transform: "none" } },
  lockedSkillIcon: { position: "absolute", top: 28, left: "50%", width: 31, height: 31, objectFit: "contain", imageRendering: "pixelated", transform: "translateX(-50%)", filter: "none", pointerEvents: "none", zIndex: 4 },
  selectedSkill: { filter: "none", opacity: 1, transform: "translateY(-2px)", "&:after": { content: "''", position: "absolute", top: 2, left: "50%", width: 76, height: 84, border: "3px solid #ffe889", borderRadius: 2, pointerEvents: "none", transform: "translateX(-50%)" }, "&:hover": { opacity: 1, transform: "translateY(-2px)" } },
  skillIcon: { width: 36, height: 36, objectFit: "contain", imageRendering: "pixelated", zIndex: 1 },
  skillName: { position: "absolute", top: 89, left: 0, width: "100%", minHeight: 38, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "3px 1px 0", color: "#2d2739", font: "800 10px/1.08 Arial,sans-serif", textAlign: "center", textShadow: "0 1px 0 rgba(255,248,214,.7)", overflowWrap: "anywhere", zIndex: 1 },
  skillPoint: { position: "absolute", top: -5, right: 0, minWidth: 23, height: 25, display: "flex", alignItems: "center", justifyContent: "center", color: "#202033", background: "#dce4f3", border: "3px solid #101018", borderRadius: 2, font: "400 17px/1 SkillsSecondary,'Courier New',monospace", zIndex: 2 },
  skillRankBadge: { position: "absolute", top: 72, right: 1, minWidth: 29, padding: "3px 4px", color: "#fff", background: "#338c4a", border: "2px solid #101018", borderRadius: 3, font: "800 10px/1 Arial,sans-serif", zIndex: 3 },
  selectedMark: { position: "absolute", top: 7, left: 7, width: 20, height: 26, objectFit: "contain", imageRendering: "pixelated", zIndex: 2 },
  skillTooltip: { maxWidth: 280, padding: 0, color: "#fff8d6", background: "#27364c", border: "3px solid #101018", borderRadius: 7, boxShadow: "5px 5px 0 rgba(16,16,24,.38)", fontFamily: "Arial,sans-serif", fontSize: 13 },
  tooltipArrow: { color: "#101018" },
  tooltipTitle: { display: "block", padding: "8px 10px", color: "#fff8d6", background: "#75516a", borderBottom: "2px solid #101018", fontSize: 14, fontWeight: 900 },
  tooltipBenefit: { display: "block", padding: "8px 10px", color: "#f4fff3", background: "#2f7d4a", fontWeight: 800, lineHeight: 1.3 },
  tooltipDownside: { display: "block", padding: "8px 10px", color: "#fff4f1", background: "#b83a3e", borderTop: "2px solid #101018", fontWeight: 800, lineHeight: 1.3 },
  detailBackdrop: { position: "fixed", inset: 0, zIndex: 19, background: "rgba(16,16,24,.48)" },
  detailPanel: { position: "fixed", top: 0, right: 0, zIndex: 20, width: 370, maxWidth: "94vw", height: "100vh", overflowY: "auto", padding: "16px 14px 22px", color: "#332235", background: "#e5a46f", borderLeft: "5px solid #101018", boxShadow: "-8px 0 0 rgba(16,16,24,.25)", fontFamily: "SkillsSecondary,'Courier New',monospace", [theme.breakpoints.down("xs")]: { top: "auto", bottom: 0, width: "100%", maxWidth: "100%", height: "auto", maxHeight: "82vh", borderLeft: 0, borderTop: "5px solid #101018" } },
  detailClose: { position: "absolute", top: 10, right: 10, width: 34, height: 34, color: "#fff8d6", background: "#9b392f", border: "3px solid #101018", borderRadius: 5, cursor: "pointer", font: "900 20px/1 Arial,sans-serif" },
  detailTitle: { margin: "0 38px 12px", fontSize: 27, lineHeight: 1.1, textAlign: "center" },
  detailBook: { width: 110, height: 116, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", imageRendering: "pixelated" },
  detailIcon: { width: 58, height: 58, objectFit: "contain", imageRendering: "pixelated" },
  detailBenefit: { margin: "0 0 9px", padding: "10px 12px", color: "#fff", background: "#338c4a", border: "3px solid #101018", borderRadius: 4, fontFamily: "SkillsHint,'Courier New',monospace", fontSize: 18, lineHeight: 1.25 },
  detailDownside: { margin: "0 0 9px", padding: "10px 12px", color: "#fff", background: "#e83b4d", border: "3px solid #101018", borderRadius: 4, fontFamily: "SkillsHint,'Courier New',monospace", fontSize: 18, lineHeight: 1.25 },
  rankPanel: { marginTop: 14, padding: 12, background: "#efb57f", border: "4px solid #101018", borderRadius: 7, boxShadow: "inset 0 0 0 3px #ffd19d" },
  rankHeader: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10, fontSize: 17 },
  rankChoices: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 9 },
  rankChoice: { minHeight: 53, display: "flex", alignItems: "center", justifyContent: "center", background: "#fff8d6", border: "3px solid #101018", borderRadius: 5, fontSize: 26 },
  activeRank: { color: "#fff", background: "#338c4a", boxShadow: "inset 0 0 0 3px #78c66d" },
  availableRank: { color: "#332235", background: "#ffe889", boxShadow: "inset 0 0 0 3px #fff6bd" },
  lockedRank: { position: "relative", color: "#7c6b69", background: "#b89b88", boxShadow: "inset 0 0 0 3px #d5bca8" },
  rankLock: { position: "absolute", top: -11, right: -9, width: 27, height: 27, objectFit: "contain", imageRendering: "pixelated" },
  nextUpgrade: { marginTop: 14, padding: 12, background: "#f3c08a", border: "3px solid #101018", borderRadius: 7 },
  upgradeTitle: { margin: "0 0 8px", color: "#fff", background: "#338c4a", border: "2px solid #101018", padding: "5px 8px", fontSize: 17 },
  costRow: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginTop: 7, padding: "6px 8px", background: "#fff0bd", border: "2px solid #332235", borderRadius: 5, fontFamily: "Arial,sans-serif", fontSize: 14, fontWeight: 900 },
  shardIcon: { width: 24, height: 24, objectFit: "contain", imageRendering: "pixelated", verticalAlign: "middle", marginRight: 6 },
  upgradeButton: { width: "100%", minHeight: 49, marginTop: 12, color: "#fff8d6", background: "#1f7b48", border: "4px solid #101018", borderRadius: 6, cursor: "pointer", font: "900 18px/1.1 SkillsHint,'Courier New',monospace", "&:disabled": { color: "#ded4c6", background: "#846f68", cursor: "not-allowed" } },
  downgradeButton: { width: "100%", marginTop: 9, padding: "7px 10px", color: "#332235", background: "#f6d4a9", border: "2px solid #332235", borderRadius: 5, cursor: "pointer", font: "800 13px Arial,sans-serif" },
  tiers: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, padding: 12, [theme.breakpoints.down("xs")]: { gridTemplateColumns: "1fr" } },
  tier: { padding: 9, background: "#fff0bd", border: "3px solid #332235", borderRadius: 8, textAlign: "center" },
  tierTitle: { margin: 0, fontSize: 15, fontWeight: 900 },
  tierCost: { margin: "3px 0 7px", fontSize: 11, fontWeight: 900 },
  stepper: { display: "grid", gridTemplateColumns: "31px 1fr 31px", gap: 5, alignItems: "center" },
  stepButton: { width: 31, height: 31, color: "#fff8d6", background: "#1f5da8", border: "2px solid #101018", borderRadius: 6, cursor: "pointer", font: "900 20px/1 'Courier New',monospace", "&:disabled": { opacity: .35, cursor: "not-allowed" } },
  count: { fontSize: 17, fontWeight: 900 },
  tierToggle: { width: "100%", marginTop: 7, padding: "5px 4px", color: "#332235", background: "#ffe889", border: "2px solid #332235", borderRadius: 5, cursor: "pointer", font: "900 11px/1 'Courier New',monospace" },
}));

const SunflowerLandSkills = () => {
  const classes = useStyles();
  const [budget, setBudget] = useState(65);
  const [shardBudget, setShardBudget] = useState(0);
  const [activeSkillId, setActiveSkillId] = useState(null);
  const [selection, setSelection] = useState(buildInitialSelection);
  const singleClickTimer = useRef(null);
  const longPressTimer = useRef(null);
  const longPressTriggered = useRef(false);

  useEffect(() => () => {
    window.clearTimeout(singleClickTimer.current);
    window.clearTimeout(longPressTimer.current);
  }, []);

  const used = useMemo(() => skillGroups.reduce((total, group) => {
    const state = selection[group.id];
    if (!state.enabled) return total;
    if (group.id === "machinery") return total + machinerySkills.reduce((points, skill) => points + pointsForRank(skill, state.skillRanks[skill.id] || 0), 0);
    return total + state.tiers.reduce((groupTotal, count, index) => groupTotal + count * (index + 1), 0);
  }, 0), [selection]);

  const usedShards = useMemo(() => machinerySkills.reduce((total, skill) => total + shardsForRank(skill, selection.machinery.skillRanks[skill.id] || 0), 0), [selection]);

  const updateTier = (group, tierIndex, nextCount) => setSelection(current => ({
    ...current,
    [group.id]: {
      ...current[group.id],
      tiers: current[group.id].tiers.map((count, index) => index === tierIndex ? Math.max(0, Math.min(group.counts[tierIndex], nextCount)) : count),
    },
  }));

  const toggleGroup = groupId => setSelection(current => ({
    ...current,
    [groupId]: { ...current[groupId], enabled: !current[groupId].enabled },
  }));

  const changeMachineryRank = (skill, change) => setSelection(current => {
    const currentRanks = current.machinery.skillRanks;
    const currentRank = currentRanks[skill.id] || 0;
    const nextRank = Math.max(0, Math.min(3, currentRank + change));
    let skillRanks = { ...currentRanks, [skill.id]: nextRank };
    const tierOnePoints = machinerySkills.filter(item => item.tier === 1).reduce((total, item) => total + pointsForRank(item, skillRanks[item.id] || 0), 0);
    if (tierOnePoints < 3) skillRanks = Object.fromEntries(Object.entries(skillRanks).filter(([id]) => machinerySkills.find(item => item.id === id).tier === 1));
    const lowerTierPoints = machinerySkills.filter(item => item.tier < 3).reduce((total, item) => total + pointsForRank(item, skillRanks[item.id] || 0), 0);
    if (lowerTierPoints < 7) skillRanks = Object.fromEntries(Object.entries(skillRanks).filter(([id]) => machinerySkills.find(item => item.id === id).tier < 3));
    return { ...current, machinery: { ...current.machinery, skillRanks } };
  });

  const clearLongPress = () => window.clearTimeout(longPressTimer.current);
  const handleSkillPressStart = skill => {
    longPressTriggered.current = false;
    clearLongPress();
    longPressTimer.current = window.setTimeout(() => {
      longPressTriggered.current = true;
      window.clearTimeout(singleClickTimer.current);
      setActiveSkillId(skill.id);
    }, 520);
  };
  const handleSkillClick = (skill, rank) => {
    if (longPressTriggered.current) {
      longPressTriggered.current = false;
      return;
    }
    window.clearTimeout(singleClickTimer.current);
    singleClickTimer.current = window.setTimeout(() => {
      if (rank === 0 && remaining >= skill.tier) changeMachineryRank(skill, 1);
    }, 240);
  };
  const handleSkillDoubleClick = skill => {
    window.clearTimeout(singleClickTimer.current);
    clearLongPress();
    longPressTriggered.current = false;
    setActiveSkillId(skill.id);
  };

  const selectedSkillCount = group => group.id === "machinery" ? Object.values(selection.machinery.skillRanks).filter(rank => rank > 0).length : selection[group.id].tiers.reduce((total, count) => total + count, 0);
  const groupPoints = group => group.id === "machinery" ? machinerySkills.reduce((total, skill) => total + pointsForRank(skill, selection.machinery.skillRanks[skill.id] || 0), 0) : selection[group.id].tiers.reduce((total, count, index) => total + count * (index + 1), 0);
  const remaining = Number(budget || 0) - used;
  const remainingShards = Number(shardBudget || 0) - usedShards;
  const activeSkill = machinerySkills.find(skill => skill.id === activeSkillId);
  const activeRank = activeSkill ? selection.machinery.skillRanks[activeSkill.id] || 0 : 0;
  const nextRank = Math.min(3, activeRank + 1);
  const nextPointCost = activeSkill ? activeRank === 0 ? activeSkill.tier : upgradePointCosts[activeSkill.tier] : 0;
  const nextShardCost = activeSkill && activeRank > 0 ? upgradeShardCosts[activeSkill.tier] : 0;
  const canAffordNextRank = activeRank < 3 && remaining >= nextPointCost && remainingShards >= nextShardCost;

  return <div className={classes.page}>
    <Helmet>
      <title>Sunflower Land Skills Calculator | Chuck Fresco</title>
      <meta name="description" content="Plan Sunflower Land skills and calculate skill points by tier." />
      <meta name="robots" content="noindex,nofollow" />
    </Helmet>
    <style>{`@font-face{font-family:SkillsHint;src:url('/assets/sunflower-land/skills/common/Hint.ttf')}@font-face{font-family:SkillsSecondary;src:url('/assets/sunflower-land/skills/common/Secondary.ttf')}`}</style>
    <header className={classes.hero}>
      <div className={classes.heroInner}>
        <div><h1 className={classes.heroTitle}>Sunflower Land Skills</h1><p className={classes.heroSubtitle}>Review every skill tree, switch categories on or off, and plan your Tier 1, Tier 2, and Tier 3 skill points.</p></div>
        <div className={classes.logoPanel}><img src={sunflowerLogo} alt="Sunflower Land" className={classes.logo} /></div>
      </div>
    </header>
    <nav className={classes.nav} aria-label="Sunflower Land pages"><Link className={classes.navLink} to="/sfl/helpers">Leaderboard</Link><Link className={classes.navLink} to="/sfl/fishing">Fishing</Link><Link className={classes.navLink} to="/sfl/fish-market">Fish Market</Link><Link className={classes.navLink} to="/sfl/crops">Crops</Link></nav>
    <main className={classes.shell}>
      <section className={classes.calculator} aria-label="Skill point calculator">
        <div className={classes.calcIntro}><h2 className={classes.calcTitle}>Skill point calculator</h2><p className={classes.calcCopy}>Select a Machinery skill for details, then unlock or rank it up. Higher ranks also use Ascension Shards.</p></div>
        <label className={classes.stat}><span className={classes.statLabel}>Points available</span><input className={classes.budgetInput} type="number" min="0" value={budget} onChange={event => setBudget(Math.max(0, Number(event.target.value)))} aria-label="Points available" /></label>
        <div className={classes.stat}><span className={classes.statLabel}>Points used</span><strong className={classes.statValue}>{used}</strong></div>
        <div className={classes.stat}><span className={classes.statLabel}>Points remaining</span><strong className={`${classes.statValue} ${remaining < 0 ? classes.remainingNegative : ""}`}>{remaining}</strong></div>
        <label className={classes.stat}><span className={classes.statLabel}>Shards available</span><input className={classes.budgetInput} type="number" min="0" value={shardBudget} onChange={event => setShardBudget(Math.max(0, Number(event.target.value)))} aria-label="Shards available" /></label>
        <div className={classes.stat}><span className={classes.statLabel}>Shards used</span><strong className={classes.statValue}>{usedShards}</strong><small>{remainingShards} remaining</small></div>
        <button className={classes.resetButton} type="button" onClick={() => setSelection(buildInitialSelection())}>Reset skills</button>
      </section>
      <div className={classes.grid}>
        {skillGroups.map(group => {
          const state = selection[group.id];
          return <article className={`${classes.card} ${group.id === "machinery" ? classes.machineryCard : ""} ${!state.enabled ? classes.cardDisabled : ""}`} key={group.id}>
            <div className={classes.cardHeader}>
              <div><h2 className={classes.cardTitle}>{group.name}</h2><span className={classes.categoryTotal}>{selectedSkillCount(group)} skills · {state.enabled ? groupPoints(group) : 0} points used</span></div>
              <button className={`${classes.toggle} ${!state.enabled ? classes.toggleOff : ""}`} type="button" onClick={() => toggleGroup(group.id)} aria-pressed={state.enabled}>{state.enabled ? "On" : "Off"}</button>
            </div>
            {group.id === "machinery" ? <div className={classes.machineryBoard}>
              <p className={classes.machineryHint}>Select a skill to view its details, unlock it, and plan ranks 1–3.</p>
              {[1, 2, 3].map(tier => {
                const unlockRequirement = tier === 2 ? 3 : tier === 3 ? 7 : 0;
                const lowerTierPoints = machinerySkills.filter(skill => skill.tier < tier).reduce((total, skill) => total + pointsForRank(skill, state.skillRanks[skill.id] || 0), 0);
                const isTierUnlocked = lowerTierPoints >= unlockRequirement;
                return <section className={`${classes.machineryTier} ${!isTierUnlocked ? classes.lockedTier : ""}`} key={tier} aria-labelledby={`machinery-tier-${tier}`}>
                <h3 className={classes.machineryTierLabel} id={`machinery-tier-${tier}`}>Tier {tier} · {tier} point{tier > 1 ? "s" : ""}</h3>
                {!isTierUnlocked && <span className={classes.lockBadge}>🔒 {lowerTierPoints}/{unlockRequirement} points to unlock</span>}
                <div className={classes.machineryRow}>
                  {machinerySkills.filter(skill => skill.tier === tier).map(skill => {
                    const rank = state.skillRanks[skill.id] || 0;
                    const isSelected = rank > 0;
                    const tierBackground = tier === 1 ? "book-tier-1.webp" : `skill-tier-${tier}.webp`;
                    const tooltip = <div><strong className={classes.tooltipTitle}>{skill.name}</strong><span className={classes.tooltipBenefit}>{skill.description}</span>{skill.downside && <span className={classes.tooltipDownside}>{skill.downside}</span>}</div>;
                    return <Tooltip arrow placement="top" title={tooltip} classes={{ tooltip: classes.skillTooltip, arrow: classes.tooltipArrow }} key={skill.id}>
                      <span className={classes.skillSlot} tabIndex={!isTierUnlocked ? 0 : undefined}>
                        <button className={`${classes.skillButton} ${!isTierUnlocked ? classes.lockedSkill : ""} ${isSelected ? classes.selectedSkill : ""}`} style={{ backgroundImage: `url(${machineryAsset(tierBackground)})` }} type="button" onClick={() => handleSkillClick(skill, rank)} onDoubleClick={() => handleSkillDoubleClick(skill)} onPointerDown={() => handleSkillPressStart(skill)} onPointerUp={clearLongPress} onPointerCancel={clearLongPress} onPointerLeave={clearLongPress} disabled={!state.enabled || !isTierUnlocked} aria-pressed={isSelected} aria-label={!isTierUnlocked ? `${skill.name} locked, spend ${unlockRequirement} Machinery points to unlock Tier ${tier}` : rank === 0 ? `Unlock ${skill.name}; double click or hold for details` : `${skill.name}, Rank ${rank}; double click or hold for details`}>
                          {isSelected && <img className={classes.selectedMark} src={machineryAsset("increase-arrow.png")} alt="" />}
                          <span className={classes.skillPoint}>{tier}</span>
                          <img className={classes.skillIcon} src={machineryAsset(skill.file)} alt="" />
                          <span className={classes.skillName}>{skill.name}</span>
                          {rank > 0 && <span className={classes.skillRankBadge}>R{rank}</span>}
                        </button>
                        {!isTierUnlocked && <img className={classes.lockedSkillIcon} src={commonSkillAsset("lock.png")} alt="" />}
                      </span>
                    </Tooltip>;
                  })}
                </div>
              </section>})}
            </div> : <><div className={classes.imageWrap}><img src={skillAsset(group.file)} alt={`${group.name} skill tree reference`} className={classes.skillImage} /></div>
            <div className={classes.tiers}>
              {group.counts.map((max, tierIndex) => {
                const count = state.tiers[tierIndex];
                const cost = tierIndex + 1;
                return <section className={classes.tier} key={cost} aria-label={`${group.name} Tier ${cost}`}>
                  <h3 className={classes.tierTitle}>Tier {cost}</h3><p className={classes.tierCost}>{cost} point{cost > 1 ? "s" : ""} each · {count * cost} used</p>
                  <div className={classes.stepper}><button className={classes.stepButton} type="button" disabled={!state.enabled || count === 0} onClick={() => updateTier(group, tierIndex, count - 1)} aria-label={`Remove one ${group.name} Tier ${cost} skill`}>−</button><span className={classes.count}>{count} / {max}</span><button className={classes.stepButton} type="button" disabled={!state.enabled || count === max} onClick={() => updateTier(group, tierIndex, count + 1)} aria-label={`Add one ${group.name} Tier ${cost} skill`}>+</button></div>
                  <button className={classes.tierToggle} type="button" disabled={!state.enabled} onClick={() => updateTier(group, tierIndex, count === max ? 0 : max)}>{count === max ? "Clear tier" : "Select all"}</button>
                </section>;
              })}
            </div></>}
          </article>;
        })}
      </div>
    </main>
    {activeSkill && <>
      <button className={classes.detailBackdrop} type="button" onClick={() => setActiveSkillId(null)} aria-label="Close skill details" />
      <aside className={classes.detailPanel} role="dialog" aria-modal="true" aria-labelledby="skill-detail-title">
        <button className={classes.detailClose} type="button" onClick={() => setActiveSkillId(null)} aria-label="Close skill details">×</button>
        <h2 className={classes.detailTitle} id="skill-detail-title">{activeSkill.name}</h2>
        <div className={classes.detailBook} style={{ backgroundImage: `url(${machineryAsset(activeSkill.tier === 1 ? "book-tier-1.webp" : `skill-tier-${activeSkill.tier}.webp`)})` }}><img className={classes.detailIcon} src={machineryAsset(activeSkill.file)} alt="" /></div>
        <p className={classes.detailBenefit}>{activeSkill.description}</p>
        {activeSkill.downside && <p className={classes.detailDownside}>{activeSkill.downside}</p>}
        <section className={classes.rankPanel} aria-label={`${activeSkill.name} rank`}>
          <div className={classes.rankHeader}><strong>RANK</strong><span>{activeRank} of 3</span></div>
          <div className={classes.rankChoices}>{[1, 2, 3].map(rank => {
            const isUnlocked = rank <= activeRank;
            const isAvailable = rank === activeRank + 1;
            const isLocked = rank > activeRank + 1;
            return <span className={`${classes.rankChoice} ${isUnlocked ? classes.activeRank : ""} ${isAvailable ? classes.availableRank : ""} ${isLocked ? classes.lockedRank : ""}`} key={rank} aria-label={`Rank ${rank}${isUnlocked ? " unlocked" : isAvailable ? " available" : ` locked until Rank ${rank - 1} is unlocked`}`}>
              {rank}
              {isLocked && <img className={classes.rankLock} src={commonSkillAsset("lock.png")} alt="" />}
            </span>;
          })}</div>
        </section>
        <section className={classes.nextUpgrade}>
          <h3 className={classes.upgradeTitle}>{activeRank === 0 ? "Unlock skill" : activeRank < 3 ? `Rank ${nextRank} upgrade` : "Maximum rank"}</h3>
          {activeRank < 3 ? <>
            <div className={classes.costRow}><span>Skill Points</span><strong>{nextPointCost} needed · {Math.max(0, remaining)} available</strong></div>
            {nextShardCost > 0 && <div className={classes.costRow}><span><img className={classes.shardIcon} src={commonSkillAsset("ascension-shard.webp")} alt="" />Shards</span><strong>{nextShardCost} needed · {Math.max(0, remainingShards)} available</strong></div>}
            <button className={classes.upgradeButton} type="button" disabled={!canAffordNextRank} onClick={() => changeMachineryRank(activeSkill, 1)}>{activeRank === 0 ? "Unlock Rank 1" : `Upgrade to Rank ${nextRank}`}</button>
          </> : <p>This skill is fully ranked.</p>}
          {activeRank > 0 && <button className={classes.downgradeButton} type="button" onClick={() => changeMachineryRank(activeSkill, -1)}>Remove Rank {activeRank}</button>}
        </section>
      </aside>
    </>}
  </div>;
};

export default SunflowerLandSkills;
