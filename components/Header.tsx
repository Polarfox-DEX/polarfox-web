import { HeaderMobile } from './HeaderMobile'
import { HeaderDesktop } from './HeaderDesktop'

export function Header() {
  return (
    <>
      {/* TODO: merge the two headers properly */}
      <HeaderMobile className={''} />
      <HeaderDesktop />
    </>
  )
}
