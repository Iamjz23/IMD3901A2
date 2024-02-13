AFRAME.registerComponent('spawn-xo-button', {
    init: function () {
        this.el.addEventListener('click', this.onClick.bind(this));
        this.positionPool = [
            { x: 2.05, y: 2.6, z: 2.2 },
            { x: 2.05, y: 4.7, z: 2.2 },
            { x: 0, y: 6.8, z: 2.2 },
            { x: -2.05, y: 2.6, z: 2.2 },
            { x: -2.05, y: 4.7, z: 2.2 },
            { x: -2.05, y: 6.8, z: 2.2 }
        ];
        //Shuffle the position pool
        this.shuffleArray(this.positionPool);
        this.spawnedXOs = [];
    },
    onClick: function (event) {
        const position = this.el.getAttribute('position');
        //Randomlly choose a position from the position pool
        const newPosition = this.positionPool.pop();
        const newObject = document.createElement('a-entity');
        newObject.setAttribute('gltf-model', '#' + this.el.id.substring(0, 1));
        newObject.setAttribute('scale', "0.15 0.15 0.15"); // Set the scale of the new model
        newObject.setAttribute('position', `${position.x} 3.3 ${position.z}`); //Set the position of the new model to its original position
        newObject.setAttribute('animation__mouseenter', 'property: scale; to: 0.18 0.18 0.18; dur: 200; startEvents: mouseenter;'); //Set animation for mouse enter
        newObject.setAttribute('animation__mouseleave', 'property: scale; to: 0.15 0.15 0.15; dur: 200; startEvents: mouseleave;'); //Set animation for mouse leave
        newObject.setAttribute('animation__mouseclick', `property: position; to: ${newPosition.x} ${newPosition.y} ${newPosition.z}; dur: 500; easing: easeInOutQuad; startEvents: click;`); // Set animation for mouse click to a random position
        this.el.sceneEl.appendChild(newObject);
        this.spawnedXOs.push(newObject);
    },
    shuffleArray: function(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});

AFRAME.registerComponent('clean-xo', {
    init: function () {
        let cleanButton = this.el;
        let self = this;
        cleanButton.addEventListener('click', function () {
            //Select all x and o models
            const xoModels = document.querySelectorAll('#xModel, #oModel');
            xoModels.forEach(model => {
                model.parentNode.removeChild(model);
            });
        });
    }
});


