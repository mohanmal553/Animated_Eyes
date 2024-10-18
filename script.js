let my_body = document.getElementById("my-div");
let pupple = document.getElementsByClassName("pupple"); // get two pupple
pupple = Array.from(pupple);  // converting into array

let total_range_x = window.innerWidth;   // total window width
let total_range_y = window.innerHeight;  // total window height

let pupple_start_x;
let pupple_range_x;
let float_x;

let pupple_start_y;
let pupple_range_y;
let float_y;

if (window.innerWidth > 550) {
    my_body.addEventListener('mousemove', (event) => {
        pupple_start_x = -55;  // eye size 200px & pupple size 50px, pupple in the middle to move left or right
        pupple_range_x = 110;
        float_x = event.clientX / total_range_x;  // take the value between 0 to 1

        pupple_start_y = -55;  // eye size 200px & pupple size 50px
        pupple_range_y = 110;
        float_y = event.clientY / total_range_y;

        pupple.forEach(element => {
            // element.style.transform = `translateX(${pupple_start_x+(float_x*pupple_range_x)}px)`;
            // element.style.transform = `translateY(${pupple_start_y+(float_y*pupple_range_y)}px)`;
            element.style.transform = `translate(${pupple_start_x + (float_x * pupple_range_x)}px,${pupple_start_y + (float_y * pupple_range_y)}px)`;
        });

    })
}
else {
    my_body.addEventListener('mousemove', (event) => {
        pupple_start_x = -35;
        pupple_range_x = 70;
        float_x = event.clientX / total_range_x;

        pupple_start_y = -35;
        pupple_range_y = 70;
        float_y = event.clientY / total_range_y;

        pupple.forEach(element => {
            // element.style.transform = `translateX(${pupple_start_x+(float_x*pupple_range_x)}px)`;
            // element.style.transform = `translateY(${pupple_start_y+(float_y*pupple_range_y)}px)`;
            element.style.transform = `translate(${pupple_start_x + (float_x * pupple_range_x)}px,${pupple_start_y + (float_y * pupple_range_y)}px)`;
        });
    })
}

window.addEventListener('resize', (event) => {  // if the window is resize 
    total_range_x = window.innerWidth;  // calculate height & width again for pupple move
    total_range_y = window.innerHeight;
    float_x = event.clientX / total_range_x;
    float_y = event.clientY / total_range_y;
})