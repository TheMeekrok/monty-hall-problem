const fadeOut = (object) => {
    if (!object)
        return;
    
    console.log(object.style.opacity);

    let start = Date.now;

    let animation = setInterval(() => {
        if (Date.now - start >= 2000) {
            clearInterval(animation);
            return;
        }

        object.style.opacity = (+object.style.opacity - 0.1).toString();

    }, 20)
}

export { fadeOut }