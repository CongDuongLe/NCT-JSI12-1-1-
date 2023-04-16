import React from 'react'

const SongsCard = ({songs}) => {
    console.log(songs)

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={songs?.imgUrl} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {songs?.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{songs?.singer}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{songs?.album}</div>
      <div className="badge badge-outline">{songs.release}</div>
    </div>
  </div>
</div>
  )
}

export default SongsCard