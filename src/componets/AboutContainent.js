import React from 'react';
// import '../style.css'

function about() {
  return (
   <>
   <div className="card mb-3 my-3 m-auto " style = {{maxWidth: '85%', alignItems: 'center',  backgroundColor:'#d9d9d9'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img id='card-img' src="./images/about1.jpg" className="img-fluid rounded" alt="..."/>
    </div>
    <div className="col-md-8">
      <div id='About' className="card-body">
        <h5 id='h5' className="card-title">ABOUT</h5> <hr/>
        <p className="card-text" >
        Chhatrapati Shivaji Maharaj was the founder of the Maratha Empire in western India. 
        He is considered to be one of the greatest warriors of his time and even today, 
        stories of his exploits are narrated as a part of the folklore. With his valor 
        and great administrative skills, Shivaji Maharaj carved out an enclave from the
        declining Adilshahi sultanate of Bijapur. It eventually became the genesis of the Maratha Empire.
        After establishing his rule, Shivaji Maharaj implemented a competent and progressive administration with 
        the help of a disciplined military and well-established administrative set-up. Shivaji Maharaj is well-known
        for his innovative military tactics that centered around non-conventional methods leveraging strategic factors
        like geography, speed, and surprise to defeat his more powerful enemies.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3 my-3 m-auto" style = {{maxWidth: '85%', backgroundColor:'#d9d9d9'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img  src="./images/personal.jpg" className="img-fluid rounded" alt="..."/>
    </div>
    <div className="col-md-8">
      <div id='Personal-info' className="card-body">
        <h5 id='h5' className="card-title">Personal Info</h5>
        <hr/>
        <table>
          <thead></thead>
          <tbody>
                <tr>
                    <th> Name: </th>
                    <td>Shivaji Bhosale</td>
                </tr>
                <tr>
                    <th>Date of Birth:</th>
                    <td> 19 February, 1630</td>
                </tr>
                <tr>
                    <th>Birthplace:</th>
                    <td><a rel="noreferrer" href="https://en.wikipedia.org/wiki/Shivneri_Fort" target="_blank">Shivenri Fort, Pune</a>
                    </td>
                </tr>
                <tr>
                    <th>Parents:</th>
                    <td><a rel="noreferrer" href="https://en.wikipedia.org/wiki/Shahaji" target="_blank">Shahaji Bhosale (Father)</a> and
                        <a rel="noreferrer" href="https://en.wikipedia.org/wiki/Jijabai" target="_blank">Jijabai (Mother)</a>
                    </td>
                </tr>
                <tr>
                    <th>Spouse:</th>
                    <td>Saibai, Soyarabai, Putalabai, Sakvarbai, Laxmibai, Kashibai</td>
                </tr>
                <tr>
                    <th>Death:</th>
                    <td>3 April, 1680</td>
                </tr>
                </tbody>
                <tfoot></tfoot>
                </table>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3 my-3 m-auto " style = {{maxWidth: '85%', alignItems: 'center', backgroundColor:'#d9d9d9'}}>
  <div className="row g-0">
    <div className="col-md-4 d-flex">
      <img id='card-img' src="./images/timeline.png" className="img-fluid rounded"  style={{ alignSelf:'center'}} alt="..."/>
    </div>
    <div className="col-md-8">
      <div id='Timeline' className="card-body">
        <h5 id='h5' className="card-title">Timeline of Shivaji Maharaj's Life</h5> <hr/>
   
            <ul>
                <li><strong>February 19, 1630</strong> - Birth of Shivaji Maharaj on the hill-fort of Shivneri</li>
                <li><strong>1630-1645</strong> - Upbringing under the guidance of mother Jijabai and teacher Dadaji
                    Kondev.</li>
                <li><strong>May 16, 1640</strong> - Saibai and Shivaji Maharaj were married while still in their
                    childhood.</li>
                <li><strong>1645</strong> - Oath of Swarajya at Raireshwar temple</li>
                <li><strong>By 1645</strong> - Shivaji Maharaj acquired control of several strategic from under the
                    Bijapur Sultanate around Pune</li>
                <li><strong>November 10, 1659</strong> - Shivaji Maharaj killed Afzal Khan at the foot of Pratapgad
                    fort</li>
                <li><strong>Mid 1660</strong> - Siege of Panhala by Siddi Jauhar's army.</li>
                <li><strong>July 13, 1660</strong> - Battle of Pavan Khind</li>
                <li><strong>April 1663</strong> - Attack on Shaista Khan</li>
                <li><strong>January 5, 1664</strong> - Sack of Surat</li>
                <li><strong>June 11, 1665</strong> - Treaty of Purandar</li>
                <li><strong>August 17, 1666</strong> - Arrest in Agra and escape</li>
                <li><strong>Between 1666 - 1668:</strong> - Peace with Mughals</li>
                <li><strong>February 4, 1670</strong> - Battle of Sinhagad</li>
                <li><strong>October 2, 1670</strong> - Shivaji Maharaj sacked Surat for second time.</li>
                <li><strong>June 6, 1674</strong> - Shivaji Maharaj was crowned king of the Marathas in a lavish
                    ceremony at Raigad.</li>
                <li><strong>End of 1676</strong> - Conquest in Southern India</li>
                <li><strong>April 3, 1680</strong> - Shivaji Maharaj died at the age of 52, on the eve of Hanuman
                    Jayanti</li>
            </ul>
      </div>
    </div>
  </div>
</div>


   
   </>
  )
}

export default about
