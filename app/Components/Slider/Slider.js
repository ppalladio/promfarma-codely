import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

// const content = [
//     {
//       image: 'path/to/image1.jpg',
//       title: 'Slide 1',
//       description: 'Description for Slide 1',
//       button: 'Button 1',
//     },
//     {
//       image: 'path/to/image2.jpg',
//       title: 'Slide 2',
//       description: 'Description for Slide 2',
//       button: 'Button 2',
//     },
//   ];


// class YourComponent extends React.Component {
// render() {
//     return (
//     <Slider autoplay={3000}>
//         {content.map((item, index) => (
//         <div
//             key={index}
//             style={{ background: `url('${item.image}') no-repeat center center` }}
//         >
//             <div className="center">
//             <h1>{item.title}</h1>
//             <p>{item.description}</p>
//             <button>{item.button}</button>
//             </div>
//         </div>
//         ))}
//     </Slider>
//     );
// }
// }


function SliderComponent() {
      const content = [
        {
            image: 'path/to/image1.jpg',
            title: 'Slide 1',
            description: 'Description for Slide 1',
            button: 'Button 1',
        },
        {
            image: 'path/to/image2.jpg',
            title: 'Slide 2',
            description: 'Description for Slide 2',
            button: 'Button 2',
        },
      ];
  
      return (
        <Slider autoplay={3000}>
          {content.map((item, index) => (
            <div
              key={index}
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="center">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
            </div>
          ))}
        </Slider>
      );
}
  
export default SliderComponent;