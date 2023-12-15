import React, { useRef, useCallback, useEffect } from "react";
import dayjs from 'dayjs';

// 동영상 촬영을 위한 컴포넌트
// https://9ummy.tistory.com/24 참고
export default function VideoRecorder () {

        const videoRef = useRef<HTMLVideoElement>(null);
        const mediaRecorder = useRef<MediaRecorder | null>(null);
        const videoChunks = useRef<Blob[]>([]);
      
        const getMediaPermission = useCallback(async () => {
          try {
            const audioConstraints = { audio: true };
            const videoConstraints = {
              audio: false,
              video: true,
            };
      
            const audioStream = await navigator.mediaDevices.getUserMedia(
                audioConstraints
            );
            const videoStream = await navigator.mediaDevices.getUserMedia(
                videoConstraints
            );
      
            if (videoRef.current) {
                videoRef.current.srcObject = videoStream;
            }
      
            // MediaRecorder 추가
            const combinedStream = new MediaStream([
                ...videoStream.getVideoTracks(),
              ...audioStream.getAudioTracks(),
            ]);
      
            const recorder = new MediaRecorder(combinedStream, {
                mimeType: 'video/webm',
            });
      
            recorder.ondataavailable = (e) => {
                if (typeof e.data === 'undefined') return;
              if (e.data.size === 0) return;
              videoChunks.current.push(e.data);
            };
      
            mediaRecorder.current = recorder;
          } catch (err) {
            console.log(err);
          }
        }, []);
      
        useEffect(() => {
          getMediaPermission();
        }, []);
      
        // 동영상 Blob으로 바꿔서 로컬에 저장
        
        //TODO 아직 서버에 전송하는 코드 만들어야 함.

        const downloadVideo = () => {
          const videoBlob = new Blob(videoChunks.current, { type: 'video/webm' });
          const videoUrl = URL.createObjectURL(videoBlob);
          const link = document.createElement('a');
          link.download = `My video - ${dayjs().format('YYYYMMDD')}.webm`;
          link.href = videoUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
      
        return (
          <div>
            {/* <video ref={videoRef} className={styles.video} autoPlay /> */}
            <video ref={videoRef} autoPlay />
            <button
              onClick={() => mediaRecorder.current?.start()}
            >
              시작
            </button>
            <button
              onClick={() => mediaRecorder.current?.stop()}
            >
              완료
            </button>
            <button onClick={downloadVideo}>Download</button>
          </div>
        );
};