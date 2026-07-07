import classNames from 'classnames'
import { APP_NAME } from '@/constants/app.constant'
import type { CommonProps } from '@/@types/common'

interface LogoProps extends CommonProps {
    type?: 'full' | 'streamline'
    mode?: 'light' | 'dark'
    imgClass?: string
    logoWidth?: number | string
}

const LOGO_SRC_PATH = '/img/logo/'

const Logo = (props: LogoProps) => {
    const {
        type = 'full',
        mode = 'light',
        className,
        imgClass,
        style,
        logoWidth = 'auto',
    } = props
    const logoSrc =
        type === 'streamline'
            ? `${LOGO_SRC_PATH}chuck-fresco-mark.ico`
            : `${LOGO_SRC_PATH}chuck-fresco-logo-${mode}.svg`

    return (
        <div
            className={classNames('logo', className)}
            style={{
                ...style,
                ...{ width: logoWidth },
            }}
        >
            <img
                className={classNames(
                    type === 'streamline' ? 'max-h-9' : 'max-h-14',
                    'w-auto object-contain',
                    imgClass,
                )}
                src={logoSrc}
                alt={`${APP_NAME} logo`}
            />
        </div>
    )
}

export default Logo
