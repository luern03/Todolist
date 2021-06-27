
        let input = document.getElementById('input');
        let list = document.getElementById('list');
        let errorText = document.getElementById('errorText');
        let i = 1;

        function filterText(text) {
            if(text) {
                if(text.length >= 3) {
                    return text;
                }else{
                    errorText.innerHTML = 'Requiere 3 caracteres minimo';
                    return false;
                }
            }
            errorText.innerHTML = 'La entrada no puede estar vacia';
            return false;
        }

        function showList(input) {
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date+' '+time;

            list.innerHTML += `<li class="list-item" id='list${i}'>
                                    <div id="list-item-wrapper">
                                        <div id="listText">
                                            <span id="listText${i}">${input}</span>
                                            <p id="dateText">${dateTime}</p>
                                        </div>
                                    
                                        <div id="actionBtn">
                                            <i class="fas fa-edit text-warning" onclick="editList(${i})"></i>
                                            <i class="fas fa-trash text-danger" onclick="deleteList(${i})"></i> 
                                        </div>
                                    </div>
                                    
                                </li>
                `;
            i++;
        }

        function editList(listId) {
            let currentText = document.getElementById(`listText${listId}`);

            let editPrompt = prompt('Editar',currentText.innerHTML);

            if(editPrompt) {
                currentText.innerHTML = editPrompt;
            }else{
                errorText.innerHTML = 'Edición cancelada';
            }
        }

        function deleteList(listId) {
            
            let currentText = document.getElementById(`listText${listId}`).innerHTML;

            let deleteConfirm = confirm(`'${currentText}' Esta seguro para eliminar?`);

            if (deleteConfirm) {
                let deleteList = document.getElementById('list'+listId);
                
                list.removeChild(deleteList);
                errorText.innerHTML = 'Eliminado';
            }else{
                errorText.innerHTML = 'Cancelado la opcion eliminado';
            }
        }

        function addList() {
            let inputText = input.value;
            
            if(filterText(inputText)){
                showList(filterText(inputText));
                
                input.value = '';
                errorText.innerHTML = '';
            }
        }
   