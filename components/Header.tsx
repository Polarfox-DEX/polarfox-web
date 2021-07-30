import { HeaderMobile } from './HeaderMobile'
import { HeaderDesktop } from './HeaderDesktop'
import { Dispatch, SetStateAction } from 'react'

export interface HeaderProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>
}

export function Header({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  return (
    <>
      {/* TODO: merge the two headers properly */}
      <HeaderMobile
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <HeaderDesktop />
    </>
  )
}
