export const RESUME_PATH = '/resume/Yash_Pratap_Singh_Resume.pdf';
export const RESUME_FILENAME = 'Yash_Pratap_Singh_Resume.pdf';

export const handleDownloadResume = async (
  onSuccess?: () => void,
  onError?: (err: Error) => void
): Promise<void> => {
  try {
    const link = document.createElement('a');
    link.href = RESUME_PATH;
    link.setAttribute('download', RESUME_FILENAME);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (onSuccess) onSuccess();
  } catch (error) {
    if (onError) onError(error as Error);
  }
};

export const handleViewResume = (): void => {
  window.open(RESUME_PATH, '_blank', 'noopener,noreferrer');
};
