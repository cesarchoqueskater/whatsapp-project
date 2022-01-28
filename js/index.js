const layout = document.querySelector('.layout')
const layoutSidebar = document.querySelector('.layout-sidebar')
const layoutMain = document.querySelector('.layout-main')
const selectContactChat = document.querySelectorAll('.container-contact-list .container-chat-contact-list')


selectContactChat.forEach((index) => {
    index.addEventListener('click', function() {
        removeSelectedContactChat()
        index.setAttribute('aria-selected', true)
    })
})


export function removeSelectedContactChat() {
    selectContactChat.forEach((index) => {
        console.log("Eliminando")
        index.removeAttribute('aria-selected', true)
    })
}