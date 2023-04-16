import React, {useEffect} from 'react'
import { db, SONGS_COLLECTION, PLAYERS_COLLECTION } from '../../firebase/firebase.config'
import { useSongsData } from '../../zustandStore/useSongsData'
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    deleteField,
    updateDoc,
    onSnapshot
  } from 'firebase/firestore'
import SongsCard from './SongsCard'

const SongsCollections = () => {

    const {songs, setSongs,loading, setLoading } = useSongsData()

    // de query dc data tu firestore, thi minh phai dung cac function build-in cua firebase chu k phai la cac
    // ham call API binh thuong


    const songRefs = collection(db, SONGS_COLLECTION)
    const playerRefs = collection(db, PLAYERS_COLLECTION)


    // get song Data from firestore

    const getSongData = async () => {
        setLoading(true)
        const songsDocument = await getDocs(songRefs)
        const songsData = songsDocument.docs.map((doc) => doc.data())
        if (songsData) {
            setSongs(songsData) 
            setLoading(false)
        } else {
            setSongs([])
            setLoading(false)
        }
    }


    useEffect(() => {
        getSongData()
      return () => {
        setSongs([])
      }
    }, [])

  return (
    <div className='flex flex-1 h-full w-full justify-center items-center flex-col gap-y-4 overflow-auto  py-8'>
        <h1>Songs Collections</h1>
        <div className='flex flex-1 flex-col  gap-y-4 h-full'>

        {
            songs?.map(
                (item, index) => <SongsCard key={index} songs={item} />
            )
        }
        </div>
       
    </div>
  )
}

export default SongsCollections