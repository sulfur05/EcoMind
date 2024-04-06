import React from 'react';
import arts from './arts';
const foodArticles = arts.filter((article) => article.category === 'food');

const Food = () => {
  return (
    <div className='Food'>
      <div className='container2 '>  {/* Center cards using flexbox */}
        {/* <div className='card-area '>  */}
          {foodArticles.map((article, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg card" >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{article.title}</div>
                <p className="text-gray-700 text-base">
                  {article.desc}
                </p>
                <a href={article.link} target='_blank'>Read here</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    // </div>
  );
};

export default Food;
