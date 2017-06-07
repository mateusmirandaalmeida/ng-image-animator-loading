class Animator {

  contructor(){
    this.restrict = 'A';
    this.scope = {};
    this.priority = 100;
  }

  loadingElement(elm, animation, background){
    const loaders = {
      spinner: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiIHN0cm9rZS13aWR0aD0iMiI+ICAgICAgICA8Y2lyY2xlIGN4PSIyMiIgY3k9IjIyIiByPSI2IiBzdHJva2Utb3BhY2l0eT0iMCI+ICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgICAgICAgICAgICAgICAgIGJlZ2luPSIxLjVzIiBkdXI9IjNzIiAgICAgICAgICAgICAgICAgdmFsdWVzPSI2OzIyIiAgICAgICAgICAgICAgICAgY2FsY01vZGU9ImxpbmVhciIgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1vcGFjaXR5IiAgICAgICAgICAgICAgICAgYmVnaW49IjEuNXMiIGR1cj0iM3MiICAgICAgICAgICAgICAgICB2YWx1ZXM9IjE7MCIgY2FsY01vZGU9ImxpbmVhciIgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS13aWR0aCIgICAgICAgICAgICAgICAgIGJlZ2luPSIxLjVzIiBkdXI9IjNzIiAgICAgICAgICAgICAgICAgdmFsdWVzPSIyOzAiIGNhbGNNb2RlPSJsaW5lYXIiICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4gICAgICAgIDwvY2lyY2xlPiAgICAgICAgPGNpcmNsZSBjeD0iMjIiIGN5PSIyMiIgcj0iNiIgc3Ryb2tlLW9wYWNpdHk9IjAiPiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiICAgICAgICAgICAgICAgICBiZWdpbj0iM3MiIGR1cj0iM3MiICAgICAgICAgICAgICAgICB2YWx1ZXM9IjY7MjIiICAgICAgICAgICAgICAgICBjYWxjTW9kZT0ibGluZWFyIiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+ICAgICAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLW9wYWNpdHkiICAgICAgICAgICAgICAgICBiZWdpbj0iM3MiIGR1cj0iM3MiICAgICAgICAgICAgICAgICB2YWx1ZXM9IjE7MCIgY2FsY01vZGU9ImxpbmVhciIgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS13aWR0aCIgICAgICAgICAgICAgICAgIGJlZ2luPSIzcyIgZHVyPSIzcyIgICAgICAgICAgICAgICAgIHZhbHVlcz0iMjswIiBjYWxjTW9kZT0ibGluZWFyIiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+ICAgICAgICA8L2NpcmNsZT4gICAgICAgIDxjaXJjbGUgY3g9IjIyIiBjeT0iMjIiIHI9IjgiPiAgICAgICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiICAgICAgICAgICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMS41cyIgICAgICAgICAgICAgICAgIHZhbHVlcz0iNjsxOzI7Mzs0OzU7NiIgICAgICAgICAgICAgICAgIGNhbGNNb2RlPSJsaW5lYXIiICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4gICAgICAgIDwvY2lyY2xlPiAgICA8L2c+PC9zdmc+'
    };
    elm.src              = loaders[animation] ? loaders[animation] : loaders['spinner'];
    elm.style.background = background ? background : '#f5f5f5';
  }

  createImage(imageURL, callback){
    let img = new Image();
        img.src = imageURL;
    img.onload = function() {
      callback(this);
    };
  }

  link(scope, element, attrs) {
    const elm  = element && element[0] ? element[0] : undefined,
                 imageURL = attrs.animatorLoading,
                 background = elm.style.background;
    this.loadingElement(elm, attrs.animation, attrs.background);
    this.createImage(imageURL, image => {
      elm.src = image.src;
      elm.style.background = background;
    });
  }

}

export default Animator;
