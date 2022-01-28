import { addSelectedContactChat } from './setRemoveAriaSelected.js'
import { navigationBackLayout } from './navigation-back.js'
import { showLayout, hideLayout } from './showHideLayout.js'


const imobile = window.matchMedia('screen and (max-width:768px)')

addSelectedContactChat()

imobile.onchange = (e) => {
    console.log(e)
    if (e.matches) {
        // max-width:768px
        addSelectedContactChat(true)
        navigationBackLayout()
    } else {
        // NOT max-width:768px
        addSelectedContactChat()
    }
}