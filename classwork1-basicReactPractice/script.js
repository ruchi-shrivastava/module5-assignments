const MyReactApp = () => {
    return(
    <div>
       <h1>Learn Web Development</h1>
       <div>
        <p>Welcome to the MDN learning area. This set of articles aims to provide complete beginners to web development with fundamental skills for coding websites.</p>
       </div>
       <div>
        <p>
        The aim is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from <a href ="">the rest of MDN</a> and other intermediate to advanced resources that assume a lot of previous knowledge.
        </p>
       </div>
       <div>
        <p>If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.</p>
       </div>
    </div>
    )
};
const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv);
root.render(
    <MyReactApp />
)