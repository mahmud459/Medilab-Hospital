import React,{useState} from "react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
    <div className="accordion-item">
        <h3 onClick={onToggle} className="accordion-title">{title}</h3>
        {isOpen && <div className="accordion-content">{content}</div>}
    </div>
);

const  Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = [
        { title: 'Non consectetur a erat nam at lectus urna duis?', content: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.' },
        { title: ' Feugiat scelerisque varius morbi enim nunc faucibus?', content: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.' },
        { title: ' Dolor sit amet consectetur adipiscing elit pellentesque?', content: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis' },
        { title: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?', content: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis' },
        { title: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?', content: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis' },
        { title: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?', content: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis' },
    ];

    return (
        <>
        <section>
        <div className="Questions">
        <div className="my-container">
        <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
    </div>

        <div className="my-container">
            <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={() => toggleItem(index)}
                />
            ))}
        </div>
        </div>
        </div>
        <div className="my-container">
        <div className="Questions-container">
      <div className="Questions-left-div">
        <h1>Testimonials</h1>
        <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      </div>
      <div className="Questions-right-div">
        <div className="doctor-name">
        <div  className="circular-image">
             </div>
             <div className="icons-tatle">
            <h3>mahmud</h3>
            <small>eyes</small><br />
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
             </div>
             </div>
             <div className="carusal-info">
        <p> <span><i class="fa-solid fa-quote-left"></i>
        </span>
          Cumque mollitia libero molestias eius facilis inventore. Ad reprehenderit quaerat tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eius ea ducimus delectus eaque quibusdam culpa fugiat, repellendus voluptate dolore. deleniti?
          <span><i class="fa-solid fa-quote-left"></i></span>
          </p>
        </div>
      </div>
    </div>
        </div>
        </section>
        </>
    );
};

export default  Questions ;