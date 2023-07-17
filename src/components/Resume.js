import React from 'react';

function Resume() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  function handleResumeClick() {
    const resumeFilePath = process.env.PUBLIC_URL + '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeFilePath;
    link.download = 'resume.pdf';
    link.click();
  }
  
  

  return (
    <section
      style={{
        backgroundImage: "url('/res.jpg')",
        backgroundPosition: 'inherit',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '80px 0',
        textAlign: 'center',
      }}
    >
      <h2 style={{ color: '#fff', marginBottom: '40px' }}>Check out my resume</h2>
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: '#fff',
          display: 'inline-block',
          padding: '20px',
          borderRadius: '5px',
          transition: 'all 0.2s ease-in-out',
          cursor: 'pointer',
          transform: isExpanded ? 'scale(1.1)' : 'scale(1)',
        }}
        onClick={handleResumeClick}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <h3 style={{ marginBottom: '20px', color: '#fff' }}>Download your resume</h3>
        <div
          style={{
            width: '40px',
            height: '2px',
            backgroundColor: '#fff',
            margin: '0 auto',
            transition: 'all 0.2s ease-in-out',
            transform: isExpanded ? 'scaleX(1.2)' : 'scaleX(1)',
          }}
        />
      </div>
      <p style={{ color: '#fff', marginTop: '40px' }}>
        {isExpanded ? 'Grab a Copy' : ''}
      </p>
    </section>
  );
}

export default Resume;

