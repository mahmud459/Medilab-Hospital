import React, { useState } from "react";
import department1Img from './assets/img-fail/departments-1.jpg'; 
import neurology from './assets/img-fail/departments-2.jpg';
import departments3 from './assets/img-fail/departments-3.jpg';
import hepatoligy4 from './assets/img-fail/departments-4.jpg';
import hepatoligy5 from './assets/img-fail/departments-5.jpg';



const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Cardiology', 'Neurology', 'Hepatology','Pediatrics', 'Eye Care'];
  const content = [
    {
      title: 'Cardiology',
      paragraph: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka Et nobis maiores , eius classNamen  Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
      image: department1Img, 
    },
    {
      title: 'Impedit facilis occaecati odio neque aperiam sit',
      paragraph: 'Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut  Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae',
      image: neurology,
    },
    {
      title: 'Et blanditiis nemo veritatis excepturi',
      paragraph: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka      Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal',
      image: departments3,
    },
    {
        title: 'Cardiology',
        paragraph: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka Et nobis maiores , eius classNamen  Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
        image: hepatoligy4, 
      },
      {
        title: 'Eye Care',
        paragraph: 'Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka Et nobis maiores , eius classNamen  Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero',
        image: hepatoligy5, 
      },
  ];

  return (
    <>
    <section id="Departments">
    <div className="my-container">
    <div className="section-title">
        <h2>Departments</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>
</div>
    <div className="my-container">
      <div className="tabs-container">
        <div className="tab-titles">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={activeTab === index ? 'active' : ''}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="tab-content">
          <div className="tab-content-inner">
            <div className="tabs-text">
                <h1>{content[activeTab].title}</h1>
            <p>{content[activeTab].paragraph}</p>
            </div>
            
            <div className="tabs-img">
                 <img src={content[activeTab].image} alt={content[activeTab].title} />
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default Tabs;
