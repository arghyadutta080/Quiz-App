interface FormattingOptions {
    convertMarkdown?: boolean;
    preserveLists?: boolean;
    convertSuperscript?: boolean;
}

interface FormattedResult {
    html: string;
    success: boolean;
    error?: string;
}

/**
 * Formats API response text for web display
 * @param text Raw text from API
 * @param options Formatting options
 * @returns Formatted HTML string with status
 */
export const formatAPIText = (
    text: string,
    options: FormattingOptions = {
        convertMarkdown: true,
        preserveLists: true,
        convertSuperscript: true,
    }
): FormattedResult => {
    try {
        if (!text) {
            return { html: '', success: false, error: 'Empty input text' };
        }

        let formatted = text;

        // Clean up line breaks
        formatted = formatted
            .replace(/\r\n\r\n/g, '<br><br>')
            .replace(/\r\n/g, ' ')
            .trim();

        // Handle superscript numbers if enabled
        if (options.convertSuperscript) {
            formatted = formatted
                .replace(/(\d)′/g, '$1\'')
                .replace(/(\d)'(?!\w)/g, '<sup>$1\'</sup>');
        }

        // Convert markdown to HTML if enabled
        if (options.convertMarkdown) {
            // Bold text
            formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        }

        // Handle bullet points if enabled
        if (options.preserveLists && formatted.includes('* ')) {
            const parts = formatted.split('<br><br>');
            formatted = parts
                .map(part => {
                    if (part.trim().startsWith('* ')) {
                        const listItems = part
                            .split('* ')
                            .filter(item => item.trim())
                            .map(item => `<li>${item.trim()}</li>`)
                            .join('');
                        return `<ul>${listItems}</ul>`;
                    }
                    return part;
                })
                .join('<br><br>');
        }

        // Wrap in container
        formatted = `<div class="formatted-text">${formatted}</div>`;

        return {
            html: formatted,
            success: true
        };
    } catch (error) {
        return {
            html: '',
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        };
    }
};

// Companion CSS module
export const formatterStyles = `
  .formatted-text {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    padding: 1rem;
    max-width: 80ch;
  }

  .formatted-text ul {
    padding-left: 1.5rem;
    margin: 0.75rem 0;
  }

  .formatted-text li {
    margin-bottom: 0.5rem;
  }

  .formatted-text strong {
    font-weight: 600;
  }
`;