import React from 'react';

export default function Post(props) {
  return (
    <div style={{ width: 250, height: 200, padding: 10, backgroundColor: 'grey', borderRadius: 20 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ width: 25, height: 25, borderRadius: '50%' }}
            src={props.image}
            alt="Rahul Naskar Profile"
          />
          <div style={{ marginLeft: 10 }}>
            <h3 style={{ margin: 0, fontWeight: 'bold' }}>{props.title}</h3>
          </div>
        </div>
        <div style={{ marginTop: 5 }}>
          <p style={{ margin: 0 }}>{props.follower}</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
            <p style={{ margin: 0, marginRight: 5 }}>{props.time}</p>
            <img src="./clock.svg" alt="Clock Icon" style={{ width: 15, height: 15 }} />
          </div>
        </div>
        <p style={{ marginTop: 10 }}>
          {props.description}
        </p>
      </div>
    </div>
  );
}
