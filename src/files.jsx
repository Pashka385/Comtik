import { useEffect, useState } from 'react';
import styles from './css/file.module.css';
import Title from './Title';
import { FILES } from './data';

export default function FilesDownload() {
  const [file, setFile] = useState(null);
  const [isLoad, setLoad] = useState(true);

  const handleDownload = (filePath) => {
    setFile(filePath);
    const a = document.createElement('a');
    a.href = filePath;
    a.download = filePath.split('/').pop();
    document.body.appendChild(a);
    a.click();
  };

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  return (
    <>
    <div className={styles.title}>
      <Title><i class="fa-solid fa-file"></i>Документы<i class="fa-solid fa-file"></i></Title>
    </div>
    <div className={styles.container}>
      {FILES.map((elem) => (
        <div key={elem.id} className={styles.fileItem}>
          <p className={styles.name}>{elem.name}</p>
          {isLoad === false ? (
            <>
              <img src={elem.img} alt={elem.name} className={styles.fileImage} />
              <button onClick={() => handleDownload(elem.file)}>Скачать</button>
              {file === elem.file ? <p className={styles.download}>Файл скачан</p> : <p className={styles.download}>Нажмите для закачки</p>}
            </>
          ) : (
            <p className={styles.load}>Loading...</p>
          )}
        </div>
      ))}
    </div>
    </>
  );
}
