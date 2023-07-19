let sidebar = document.querySelector('#sidebar');
let sidebarContainer = document.querySelector('#sidebar-container');

sidebar.addEventListener("click", openSideBar);

let ActiveSidebarContent = 	`
<ul id = 'sidebarLinks'>     	
<li><a href = "#">Sobre mim</a></li>         
<li><a href = "#">Artigos</a></li>         
<li><a href = "#">SQL</a></li>         
<li><a href = "#">R</a></li>         
<li><a href = "#">JS, HTML, CSS</a></li>     
</ul>
`;

function openSideBar(){
    if(sidebarContainer.classList.contains("sidebar-style")){
        sidebarContainer.classList.remove('sidebar-style');
        sidebarContainer.querySelector('#sidebarLinks').remove();
    }else{
    sidebarContainer.classList.add('sidebar-style');
        sidebarContainer.insertAdjacentHTML('beforeend', ActiveSidebarContent);
    }
}