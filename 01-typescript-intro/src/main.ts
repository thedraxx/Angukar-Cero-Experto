import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
//import "./topics/01-basic-types.ts" 
// import "./topics/02-object-interace.ts"
// import "./topics/03-functions.ts"
// import "./topics/04-homeworks.ts"
import "05-basic-destructuring.ts"
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
