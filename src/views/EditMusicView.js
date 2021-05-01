import React, {useState, useRef} from 'react';
import axios from 'axios';
import ItemGroup from "../components/ItemGroup";
import Input from '../components/Input';
import Item from '../components/Item';
import Label from '../components/Label';
import SubTitle from '../components/SubTitle';
import Button from '../components/Button';

function EditMusicView() {
    const searchInput = useRef(null);
    const [track, setTrack] = useState("");
    const [musicList, setMusicList] = useState([
        {
            id: -1,
            track: '',
            album: '',
            artist: '',
            filepath: '',
        }
    ]);
    const [music, setMusic] = useState({
        track: '',
        album: '',
        artist: '',
        filepath: '',
    });
    const [musicForEdit, setMusicForEdit] = useState({
        id: -1,
        track: '',
        album: '',
        artist: '',
        filepath: '',
    });

    const setMusicObj = (e) => {
        const {value, name} = e.target;
        setMusic({
            ...music,
            [name]: value
        }); 
    }

    const setMusicForEditObj = (e) => {
        const {value, name} = e.target;
        setMusicForEdit({
            ...musicForEdit,
            [name]: value
        }); 
    }

    const upload = (e) => {
        const {files} = e.target;
        if(files !== null) {
            uploadMusic(files)
            .then((response) => {
                setMusic({
                    ...music,
                    filepath: response.data.filepath
                });
            });
        }
    };

    const uploadForEdit = (e) => {
        const {files} = e.target;
        if(files !== null) {
            uploadMusic(files)
            .then((response) => {
                setMusicForEdit({
                    ...musicForEdit,
                    filepath: response.data.filepath
                });
            });
        }
    };

    const uploadMusic = async (files) => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('music', files[0]);
            axios.post('http://3.35.22.137/api/music/file', formData)
                .then((response) => {
                    return resolve(response);
                });
        });
    };

    const addTrack = (e) => {
        axios({
            method: 'post',
            url: 'http://3.35.22.137/api/music/track',
            data: {
                ...music
            }
        })
        .then((response) => {
            searchInput.current.focus();
        });
    }

    const setTrackForSearch = (e) => {
        const {value} = e.target;
        setTrack(value);
    };

    const searchTrackList = () => {
        axios({
            method: 'get',
            url: `http://3.35.22.137/api/music/track?track=${track}`,
        })
        .then((response) => {
            if(response.status === 200) {
                let list = response.data.musicList.map((music)=> {
                    return {
                        id: music.musicId,
                        track: music.trackName,
                        album: music.albumName,
                        artist: music.artistName,
                        filepath: music.musicFilePath,
                        createdAt: music.createdAt,
                        updatedAt: music.updatedAt
                    };
                });
                setMusicList(list);
            }
        });
    };

    const edit = (music) => {
        setMusicForEdit({
            id: music.id,
            track: music.track,
            album: music.album,
            artist: music.artist,
            filepath: music.filepath,
        });
    };

    const updateTrack = (e) => {
        axios({
            method: 'put',
            url: 'http://3.35.22.137/api/music/track/id',
            data: {
                ...musicForEdit
            }
        })
        .then((response) => {
            searchInput.current.focus();
        });
    };

    const ContainerStyle = {
        'display': 'block',
        'width': '700px',
        'margin': '0 auto',
    };

    const BoxStyle = {
        'border': '2px solid palevioletred',
        'marginTop': '30px'
    };

    const flexStyle = {
        'display': 'flex'
    };

    return (
        <div style={ContainerStyle}> 
            <div style={BoxStyle}>
                <SubTitle title={"업로드"} />
                <div style={flexStyle}>
                    <Label title={"파일"} color={"black"} type={"bold"}/>
                    <Input type={"file"} name={"music"} onChange={upload} />
                </div>
                <div style={flexStyle}>
                    <Label title={"트랙명"} color={"black"} type={"bold"}/>
                    <Input value={music.track} name={"track"} onChange={setMusicObj}/>  
                </div>
                <div style={flexStyle}>
                    <Label title={"앨범명"} color={"black"} type={"bold"}/>
                    <Input value={music.album} name={"album"} onChange={setMusicObj}/>  
                </div>
                <div style={flexStyle}>
                    <Label title={"아티스트"} color={"black"} type={"bold"}/>
                    <Input value={music.artist} name={"artist"} onChange={setMusicObj}/>  
                </div>
                <Button type={"primary"} title={"완료"} onClick={addTrack} />
            </div>             
            <div style={BoxStyle}>
                <SubTitle title={"검색"} />
                <Input type={"text"} name={"track"} title={"검색할 트랙명을 입력하세요"} value={track} 
                    onChange={setTrackForSearch} onKeyUp={searchTrackList} refdom={searchInput}/>
                <div style={{padding:'10px', fontSize:'1rem', color:'#4d4d4d'}}>편집하고자 하는 트랙명을 클릭해주세요</div>
                <div style={flexStyle}>
                    <Item title={"트랙명"} color={"black"} type={"bold"}/>
                    <Item title={"앨범명"} color={"black"} type={"bold"}/>
                    <Item title={"아티스트명"} color={"black"} type={"bold"}/>
                </div>
                {
                    musicList.length !== 0 && musicList[0].id > -1 ?
                    <div>
                        {
                            musicList.map((music) => <ItemGroup music={music} edit={edit} key={music.id}/>)
                        }
                    </div>
                    :<></>
                }
            </div>
            <div style={BoxStyle}>
                <SubTitle title={"편집"} />
                <div style={flexStyle}>
                    <Label title={"트랙명"} color={"black"} type={"bold"}/>
                    <Input value={musicForEdit.track} name={"track"} onChange={setMusicForEditObj}/>  
                </div>
                <div style={flexStyle}>
                    <Label title={"앨범명"} color={"black"} type={"bold"}/>
                    <Input value={musicForEdit.album} name={"album"} onChange={setMusicForEditObj}/>  
                </div>
                <div style={flexStyle}>
                    <Label title={"아티스트"} color={"black"} type={"bold"}/>
                    <Input value={musicForEdit.artist} name={"artist"} onChange={setMusicForEditObj}/>  
                </div>
                <div style={flexStyle}>
                    <Label title={"파일"} color={"black"} type={"bold"}/>
                    <Input type={"file"} name={"music"} onChange={uploadForEdit}/>
                </div>
                <Button type={"primary"} title={"완료"} onClick={updateTrack} />
            </div>   
        </div>
    )
}

export default EditMusicView
