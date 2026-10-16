import React, { createContext, useContext, useState } from 'react';

type ModalType = 'downloads' | 'terms' | 'privacy' | 'cookies' | 'video' | 'school-sips' | 'school-qurum' | 'school-mouj' | 'partner' | null;

interface ModalContextType {
  activeModal: ModalType;
  videoUrl: string | null;
  videoTitle: string | null;
  openModal: (type: ModalType) => void;
  openVideo: (url: string, title?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  activeModal: null,
  videoUrl: null,
  videoTitle: null,
  openModal: () => {},
  openVideo: () => {},
  closeModal: () => {},
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState<string | null>(null);

  const openModal = (type: ModalType) => {
    setActiveModal(type);
    document.body.style.overflow = 'hidden';
  };

  const openVideo = (url: string, title: string = 'GES Video Story') => {
    // If regular youtube link, convert to embed
    let embed = url;
    if (url.includes('watch?v=')) {
      embed = url.replace('watch?v=', 'embed/');
    } else if (url.includes('youtu.be/')) {
      embed = url.replace('youtu.be/', 'youtube.com/embed/');
    }
    setVideoUrl(embed);
    setVideoTitle(title);
    setActiveModal('video');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    setVideoUrl(null);
    setVideoTitle(null);
    document.body.style.overflow = '';
  };

  return (
    <ModalContext.Provider value={{ activeModal, videoUrl, videoTitle, openModal, openVideo, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
