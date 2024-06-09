import React, { useEffect } from 'react';
import searchIcon from '../../assets/images_leader/search.png';
import userimg from '../../assets/images_leader/userimg.jpg';

import './LeaderBoard.css';

const Leaderboard = () => {
  useEffect(() => {
    const search = document.querySelector('.input-group input');
    const table_rows = document.querySelectorAll('tbody tr');
    const table_headings = document.querySelectorAll('thead th');

    // 1. Searching for specific data of HTML table
    search.addEventListener('input', () => {
      table_rows.forEach((row) => {
        const table_data = row.textContent.toLowerCase();
        const search_data = search.value.toLowerCase();
        row.classList.toggle('hide', !table_data.includes(search_data));
      });
    });

    // 2. Sorting HTML table
    table_headings.forEach((head, index) => {
      let sort_asc = true;
      head.onclick = () => {
        table_headings.forEach((head) => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach((td) => td.classList.remove('active'));
        table_rows.forEach((row) => {
          row.querySelectorAll('td')[index].classList.add('active');
        });

        head.classList.toggle('asc', sort_asc);
        sort_asc = !sort_asc;

        const rows_array = Array.from(table_rows);
        const sorted_rows = rows_array.sort((a, b) => {
          const a_val = a.querySelectorAll('td')[index].textContent;
          const b_val = b.querySelectorAll('td')[index].textContent;
          return sort_asc ? a_val.localeCompare(b_val) : b_val.localeCompare(a_val);
        });

        sorted_rows.forEach((row) => document.querySelector('tbody').appendChild(row));
      };
    });
  }, []);

  return (
    <div className="leaderboard-holder">
      <main className="table">
        <section className="table__header">
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', fontfamily: 'Roboto', }}>Leaderboard</h1>
          <div className="input-group">
            <input type="search" placeholder="Search Data..." />
            <img src= {searchIcon} alt="Search Icon" />
          </div>
        </section>
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th>Id <span className="icon-arrow">&uarr;</span></th>
                <th>Customer</th>
                <th>Country</th>
                <th>Coins Earned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  
                  Zinzu Chan Lee
                </td>
                <td>Japan</td>
                <td>250</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Ammar Saeed
                </td>
                <td>UAE</td>
                <td>150</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Ali Al Sayed
                </td>
                <td>Egypt</td>
                <td>350</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Ryan Adams
                </td>
                <td>USA</td>
                <td>200</td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  Maria Garcia
                </td>
                <td>Spain</td>              
                <td>275</td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  Natsumi Hoshi
                </td>
                <td>Japan</td>
                <td>190</td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Max Mustermann
                </td>
                <td>Germany</td>
                <td>300</td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  Fatima Hassan
                </td>
                <td>Saudi Arabia</td>
                <td>225</td>
              </tr>
              <tr>
                <td>9</td>
                <td>
                  Emma Johnson
                </td>
                <td>UK</td>
                <td>400</td>
              </tr>
              <tr>
                <td>10</td>
                <td>
                  Li Wei
                </td>
                <td>China</td>
                <td>175</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Leaderboard;


