export const ModalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1100,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    background: '#ffffff',
    overflow: 'auto',
    maxWidth: '60vw',
    minWidth: '350px',
    maxHeight: '100vh',
    left: '50%',
    top: '0%',
    transform: 'translate(-50%, 2%)',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '14px',
    outline: 'none',
    zIndex: 1100,
  },
};

export const MajorModalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1100,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    background: '#ffffff',
    overflow: 'auto',
    maxWidth: '588px',
    minWidth: '350px',
    maxHeight: '542px',
    left: '50%',
    top: '10%',
    transform: 'translate(-50%, 2%)',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '14px',
    outline: 'none',
    zIndex: 1100,
  },
};

export default ModalStyle;
