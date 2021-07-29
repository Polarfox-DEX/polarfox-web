import { HeaderMobile } from './HeaderMobile'
import { HeaderDesktop } from './HeaderDesktop'

export function Header() {
  return (
    <>
      <HeaderMobile className={''} />
      <HeaderDesktop />
    </>
  )
}
