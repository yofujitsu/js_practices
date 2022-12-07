let thumb = slider.querySelector('.thumb');

    thumb.onmousedown = function(event) {
      event.preventDefault(); // предотвратить запуск выделения (действие браузера)

      let shiftX = event.clientX - thumb.getBoundingClientRect().left;
      // shiftY здесь не нужен, слайдер двигается только по горизонтали

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px';
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    };

    thumb.ondragstart = function() {
      return false;
    };
    contents.onclick = function(event) {

        function handleLink(href) {
          let isLeaving = confirm(`Точно хотите перейти на страницу ${href}?`);
          if (!isLeaving) return false;
        }
  
        let target = event.target.closest('a');
  
        if (target && contents.contains(target)) {
          return handleLink(target.getAttribute('href'));
        }
      };
      thumbs.onclick = function(event) {
        let thumbnail = event.target.closest('a');
  
        if (!thumbnail) return;
        showThumbnail(thumbnail.href, thumbnail.title);
        event.preventDefault();
      }
  
      function showThumbnail(href, title) {
        largeImg.src = href;
        largeImg.alt = title;
      }
      
      ul.onclick = function(event) {
        if (event.target.tagName != "LI") return;
  
        if (event.ctrlKey || event.metaKey) {
          toggleSelect(event.target);
        } else {
          singleSelect(event.target);
        }
  
      }
  
      // предотвращает ненужное выделение элементов списка при клике
      ul.onmousedown = function() {
        return false;
      };
  
      function toggleSelect(li) {
        li.classList.toggle('selected');
      }
  
      function singleSelect(li) {
        let selected = ul.querySelectorAll('.selected');
        for(let elem of selected) {
          elem.classList.remove('selected');
        }
        li.classList.add('selected');
      }

      function allowDragAndDrop(elem) {

        elem.preventDefault();
      
      }
      function drag(elem) {
      
        elem.dataTransfer.setData("text", elem.target.id);
      
      }
      function drop(elem) {
      
        elem.preventDefault();
      
        var data = elem.dataTransfer.getData("text");

        var box = document.querySelector("#myFigure");
        var ronaldo = document.querySelector("#myImage");
        var ronaldo2 = document.querySelector("#myImage2");
        var ronaldo3 = document.querySelector("#myImage3");
        var ronaldo4 = document.querySelector("#myImage4");
        var ronaldo5 = document.querySelector("#myImage5");

        var all_cost = Number(box.getAttribute('all_cost'));
        console.log(all_cost);
        var cost = Number(ronaldo.getAttribute('cost'));
        var cost2 = Number(ronaldo2.getAttribute('cost'));
        var cost3 = Number(ronaldo3.getAttribute('cost'));
        var cost4 = Number(ronaldo4.getAttribute('cost'));
        var cost5 = Number(ronaldo5.getAttribute('cost'));
        console.log(cost);
        all_cost += cost;
        all_cost += cost2;
        all_cost += cost3;
        all_cost += cost4;
        all_cost += cost5;

        console.log(all_cost);
      
        elem.target.appendChild(document.getElementById(data));
      
      }