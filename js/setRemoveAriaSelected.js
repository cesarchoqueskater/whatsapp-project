import { showLayout, hideLayout } from './showHideLayout.js'

const selectContactChat = document.querySelectorAll('.container-contact-list .container-chat-contact-list')

// Selected chat contact
export function addSelectedContactChat(value) {
    selectContactChat.forEach((index) => {
        index.addEventListener('click', function() {
            removeSelectedContactChat()
            index.setAttribute('aria-selected', true)
            if (value) {
                showLayout()
                return true
            } else {
                hideLayout()
                return true
            }
        })
    })
}

// Remover aria-selected
export function removeSelectedContactChat() {
    selectContactChat.forEach((index) => {
        index.removeAttribute('aria-selected', true)
    })
}