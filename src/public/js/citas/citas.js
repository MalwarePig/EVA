
console.log('hakjhjh');
 
  function presentModal() {

    console.log('jjjj');
    // create the modal with the `modal-page` component
    const modalElement = document.getElementById('ModalPrueba');
    modalElement.component = 'modal-page';
    modalElement.cssClass = 'my-custom-class';
  
    // present the modal

    document.body.appendChild(modalElement);
    return modalElement.present();

  }

  //color="primary"