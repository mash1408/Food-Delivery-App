import React, { Component } from 'react';
class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: [],
        };
    }
    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    }

    componentDidMount() {
        fetch('http://localhost:3005/home/dish-all')
        .then((res) => res.json())
        .then((data) => {
             var base64Flag = 'data:image/jpeg;base64,';
            var temp=[]
            data.forEach(element => {

                var imageStr = this.arrayBufferToBase64(element.img.data.data);
                temp.push(base64Flag + imageStr)
            });

            this.setState({
                img: temp
            })
        })

    }
    render() {
         const img = this.state.img;
         const dishes = []
         for (const [index, value] of img.entries()) {
            dishes.push(<img
                src={value}
                alt='Helpful alt text'/>)
        }
        return (
            <div>
            {dishes}
          </div>

         )
    }





}


export default Image; 