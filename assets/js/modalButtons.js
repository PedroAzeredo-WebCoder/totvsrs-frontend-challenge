function deleteFunction(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success mx-3',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Você tem certeza?',
        text: "Você não poderá reverter isso!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Excluido com sucesso!',
            'Seu arquivo foi excluído.',
            'Success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado!',
            'Error'
          )
        }
      })
}

function saved(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Seu cadastro foi salvo',
        showConfirmButton: false,
        timer: 1500
      })
}

function error(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo deu errado, Tente novamente!'
    })
}

function cadastro(){
  $('#exampleModal').modal('hide'),
  $('#acessar').modal('show');
}