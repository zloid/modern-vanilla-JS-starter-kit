import { AppDisplay } from '../appDisplay/AppDisplay'
import { AppButtons } from '../appButtons/AppButtons'

export const AppUi = () => /* html */ `<div class="container">
    ${AppDisplay()}
    <hr />
    ${AppButtons()} 
</div>`
