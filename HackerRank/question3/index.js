
const render = ()=>{

let divCountElem = document.querySelector('#divCount');
divCountElem.addEventListener('change', renderButtons)


}


const renderButtons = ({currentTarget:{ value}})=>{
  let containerElement = document.querySelector('.container');
  let buttonsArray = new Array(parseInt(value)).fill(0).map((_each,id)=>{
      const buttonId = id
      const button = document.createElement('button')
      button.setAttribute("id", buttonId)
      button.innerHTML= buttonId + 1;
      button.onclick = (e)=>{
          alert(parseInt(e.currentTarget.id) + 1)
      }
      return button
  }
  )
containerElement.innerHTML= '';
  buttonsArray.forEach(each=>{
    containerElement.appendChild(each)
  })

}

document.onLoad=render()
