import { cloneElement } from 'react'
import Container from '@/components/shared/Container'
import Card from '@/components/ui/Card'
import Logo from '@/components/template/Logo'
import type { ReactNode, ReactElement } from 'react'
import type { CommonProps } from '@/@types/common'

interface SimpleProps extends CommonProps {
    content?: ReactNode
}

const Simple = ({ children, content, ...rest }: SimpleProps) => {
    return (
        <div className="min-h-screen bg-gray-950">
            <Container className="flex min-h-screen min-w-0 flex-col items-center justify-center px-6 py-10">
                <Card
                    className="w-full max-w-[760px] rounded-2xl border-0 bg-gray-800 shadow-none"
                    bodyClass="px-8 py-12 md:px-16 md:py-20"
                    bordered={false}
                >
                    <div className="mx-auto mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 shadow-lg shadow-indigo-950/30">
                        <Logo
                            type="streamline"
                            imgClass="mx-auto max-h-8 brightness-0 invert"
                        />
                    </div>
                    <div className="mx-auto w-full max-w-[600px] text-center">
                        {content}
                        {children
                            ? cloneElement(children as ReactElement, {
                                  contentClassName: 'text-center',
                                  ...rest,
                              })
                            : null}
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Simple
