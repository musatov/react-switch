import { FC, ReactElement, ReactNode } from 'react'

interface CaseProps {
  children?: ReactNode
  when: string | number
}

interface DefaultProps {
  children?: ReactNode
}

interface SwitchComponentProps {
  condition: string | number
  children?: 
    | ReactElement<CaseProps | DefaultProps>| ReactElement<CaseProps | DefaultProps>[]
}

interface SwitchComponentType extends FC <SwitchComponentProps> {
  Case: FC<CaseProps>
  Default: FC<DefaultProps>
}

export const Switch: SwitchComponentType = ({ condition, children }) => {
  console.log('condition', condition)
  return <>{children}</>
}

Switch.Case = ({ children, when }) => {
  console.log('when', when)
  return <>{children}</>
}

Switch.Default = ({ children }) => {
  return <>{children}</>
}
