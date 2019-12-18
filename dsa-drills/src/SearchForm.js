import React, { Component } from 'react'

class SearchForm extends Component {
    state = {
        data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
        result: null
    }

    linearSearch = (num) => {
        console.log(this.state.data);
        const data = this.state.data;
        let cnt = 1;
        for (let i = 0; i < data.length; i++) {
            console.log([i]);
            if(data[i] === num) return `Found: It took ${cnt} searches to find out`; //item found
            cnt++;
        }
        return `Not found: took ${cnt} to find out`;
    }

    binarySearch = (data, num, start, end, cnt=0) => {
        var start = start === undefined ? 0 : start;
        var end = end === undefined? data.length : end;

        if(start > end) {
            console.log('reach the end:', cnt)
            return `Not Found: took ${cnt} searches to find out`;
        }

        const index = Math.floor((start + end) / 2);
        const item = data[index];

        console.log('start: '+ start, 'end: ' +end)
        if(item === num) {
            return `Found: It toook ${cnt} searches to find out`;
        }

        else if (item < num) {
            return this.binarySearch(data, num, index + 1, end, cnt+1);
        }

        else if (item > num) {
            return this.binarySearch(data, num, start, index-1 , cnt+1);
        }

    }

    handleSubmit = ev => {
        ev.preventDefault();

        let input = parseInt(ev.target.input.value);
        
        //linear search
        // const result = this.linearSearch(input);
        
        //binary search
        const data = this.state.data.sort();
        const result = this.binarySearch(data, input);
        console.log(data);
        console.log(result);

        this.setState ({
            result
        })
    }

    render() {

        return(
            <div>
                <form className='search-form' onSubmit={this.handleSubmit}>
                    <input type='number' name='input' id='input' placeholder='Search Dataset(number)' />
                    <button type='submit'>Submit</button>
                </form>  
                <p className='result' id='result'>{this.state.result}</p>
            </div>
            
        );
    }
}

export default SearchForm;
