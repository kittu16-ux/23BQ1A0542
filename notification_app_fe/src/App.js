import React from 'react';

export default function App() {
  const notifications = [
    {id:1,title:'Amazon Hiring Drive',category:'Placement',createdAt:'2026-06-05'},
    {id:2,title:'Microsoft Placement Drive',category:'Placement',createdAt:'2026-06-04'},
    {id:3,title:'Semester Results',category:'Result',createdAt:'2026-06-05'},
    {id:4,title:'Tech Fest',category:'Event',createdAt:'2026-06-06'},
    {id:5,title:'Library Notice',category:'General',createdAt:'2026-06-05'}
  ];

  const priority = { Placement:1, Result:2, Event:3 };

  const sorted = [...notifications].sort((a,b)=>{
    const p1 = priority[a.category] || 99;
    const p2 = priority[b.category] || 99;
    if(p1 !== p2) return p1-p2;
    return b.createdAt.localeCompare(a.createdAt);
  });

  return (
    <div style={{padding:'20px'}}>
      <h1>Campus Notifications</h1>
      {sorted.map(n => (
        <div key={n.id} style={{border:'1px solid #ccc',padding:'10px',margin:'10px 0'}}>
          <h3>{n.title}</h3>
          <p>Category: {n.category}</p>
          <p>Date: {n.createdAt}</p>
        </div>
      ))}
    </div>
  );
}
