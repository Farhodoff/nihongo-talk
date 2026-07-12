import React from 'react';
import { Tldraw, Editor } from 'tldraw';
import 'tldraw/tldraw.css';

interface RoomWhiteboardProps {
    onMount: (editor: Editor) => void;
}

const RoomWhiteboard: React.FC<RoomWhiteboardProps> = ({ onMount }) => {
    return (
        <Tldraw
            onMount={onMount}
            licenseKey="tldraw-2026-04-19/WyJGVDdNS09TcCIsWyIqIl0sMTYsIjIwMjYtMDQtMTkiXQ.BW86tQhO9nXNyQ6IIZJl3oracKtUetYw7risI1lZbitBjGYo0BbmD/dQqi/IbESV8TetvGWCXXtUmaPV1itm6A"
        />
    );
};

export default RoomWhiteboard;
