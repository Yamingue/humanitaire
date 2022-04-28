import React, { useState } from "react";
import Apropos from "../../Component/Admin/Apropos";
import DemandeAdesion from "../../Component/Admin/DemandeAdesion";
import Layout from "../../Component/Layout";
import { getDatabase, ref, onValue } from 'firebase/database'
import firebaseApp from "../../functions/firebase";


const database = getDatabase(firebaseApp);
export default function Informtion(props) {
    const [adhesions, setAdhesions] = useState([])
    useState(()=>{
        onValue(ref(database,'/adhesion'),snap=>{
            let s= snap.toJSON()
            let arr = []
            for (const key in s) {
                const element = s[key];
                element['id']=key
                arr.push(element)
            }
            setAdhesions(arr)
        })
    },[])
    
    return <Layout>
        <Apropos />
        <DemandeAdesion data={adhesions} />
    </Layout>
}