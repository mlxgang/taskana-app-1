import cl from './Header.module.css'
import {Logo} from "@/components/logo/Logo.jsx";
import {Button} from "@/components/button/Button.jsx";

export const Header = () => {
  return (
    <header className={cl.header}>
      <Logo/>
      <Button type='primary' icon='plus' title='Создать'/>
    </header>
  )
}