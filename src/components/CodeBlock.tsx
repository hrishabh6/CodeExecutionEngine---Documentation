import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

interface CodeBlockProps {
    code: string;
    language?: string;
    title?: string;
}

export const CodeBlock = ({ code, language = "java", title }: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const escapeHtml = (text: string): string => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };

    const highlightSyntax = (code: string, lang: string): string => {
        // First escape HTML to prevent conflicts
        let highlighted = escapeHtml(code);

        if (lang === 'java') {
            // 1. Comments (single and multi-line)
            highlighted = highlighted.replace(
                /\/\/.*$/gm,
                '<span class="syntax-comment">$&</span>'
            );

            highlighted = highlighted.replace(
                /\/\*[\s\S]*?\*\//g,
                '<span class="syntax-comment">$&</span>'
            );

            // 2. String literals
            highlighted = highlighted.replace(
                /&quot;([^&]|&(?!quot;))*&quot;/g,
                '<span class="syntax-string">$&</span>'
            );

            // 3. Annotations
            highlighted = highlighted.replace(
                /(@\w+)/g,
                '<span class="syntax-annotation">$1</span>'
            );

            // 4. Keywords
            const javaKeywords = [
                'public', 'private', 'protected', 'static', 'final', 'abstract',
                'class', 'interface', 'extends', 'implements', 'import', 'package',
                'return', 'if', 'else', 'for', 'while', 'do', 'try', 'catch',
                'finally', 'throw', 'throws', 'new', 'this', 'super', 'void',
                'int', 'long', 'double', 'float', 'boolean', 'char', 'String',
                'byte', 'short', 'List', 'Map', 'Set', 'ArrayList', 'HashMap',
                'HashSet', 'Optional', 'Arrays', 'Collections', 'Override',
                'Autowired', 'Service', 'Component', 'Configuration', 'Bean',
                'RestController', 'RequestMapping', 'PostMapping', 'GetMapping',
                'PutMapping', 'DeleteMapping', 'PathVariable', 'RequestBody',
                'Valid', 'Builder', 'Data', 'Getter', 'Setter', 'NoArgsConstructor',
                'AllArgsConstructor'
            ];

            javaKeywords.forEach(keyword => {
                const regex = new RegExp(`\\b${keyword}\\b(?![^<]*</span>)`, 'g');
                highlighted = highlighted.replace(regex, `<span class="syntax-keyword">${keyword}</span>`);
            });

            // 5. Numbers
            // Numbers
            highlighted = highlighted.replace(
                /\b\d+(\.\d+)?\b(?![^<]*<\/span>)/g,
                '<span class="syntax-number">$&</span>'
            );


            // 6. Method calls
            highlighted = highlighted.replace(
                /\b(\w+)(?=\s*\()/g,
                '<span class="syntax-method">$1</span>'
            );
        } else if (lang === 'python') {
            // Comments
            highlighted = highlighted.replace(
                /#.*$/gm,
                '<span class="syntax-comment">$&</span>'
            );

            // String literals
            highlighted = highlighted.replace(
                /&quot;([^&]|&(?!quot;))*&quot;|'([^']|\\')*'/g,
                '<span class="syntax-string">$&</span>'
            );

            // Keywords
            const pythonKeywords = [
                'def', 'class', 'import', 'from', 'return', 'if', 'elif', 'else',
                'for', 'while', 'try', 'except', 'finally', 'with', 'as', 'and',
                'or', 'not', 'in', 'is', 'True', 'False', 'None', 'self', 'pass',
                'break', 'continue', 'lambda', 'yield', 'global', 'nonlocal',
                'assert', 'del', 'raise'
            ];

            pythonKeywords.forEach(keyword => {
                const regex = new RegExp(`\\b${keyword}\\b(?![^<]*</span>)`, 'g');
                highlighted = highlighted.replace(regex, `<span class="syntax-keyword">${keyword}</span>`);
            });

            // Numbers
            highlighted = highlighted.replace(
                /\b\d+(\.\d+)?\b(?![^<]*<\/span>)/g,
                '<span class="syntax-number">$&</span>'
            );


        } else if (lang === 'xml') {
            // XML tags
            highlighted = highlighted.replace(
                /(&lt;\/?)([\w-]+)(&gt;|(?:\s[^&]*&gt;))/g,
                '<span class="syntax-tag">$1</span><span class="syntax-tag-name">$2</span><span class="syntax-tag">$3</span>'
            );

            // XML attributes
            highlighted = highlighted.replace(
                /(\w+)(=)(&quot;)(.*?)(\3)/g,
                '<span class="syntax-attr-name">$1</span><span class="syntax-operator">$2</span><span class="syntax-attr-value">$3$4$5</span>'
            );
        } else if (lang === 'yaml' || lang === 'yml') {
            // Comments
            highlighted = highlighted.replace(
                /#.*$/gm,
                '<span class="syntax-comment">$&</span>'
            );

            // YAML keys
            highlighted = highlighted.replace(
                /^(\s*)([^:\s#\n]+)(\s*:)/gm,
                '$1<span class="syntax-yaml-key">$2</span><span class="syntax-operator">$3</span>'
            );

            // YAML values
            highlighted = highlighted.replace(
                /(:\s*)([^#\n]+)/g,
                '$1<span class="syntax-yaml-value">$2</span>'
            );
        } else if (lang === 'bash') {
            // Comments
            highlighted = highlighted.replace(
                /#.*$/gm,
                '<span class="syntax-comment">$&</span>'
            );

            // Strings
            highlighted = highlighted.replace(
                /('([^'\\]|\\.)*'|&quot;([^&\\]|\\.)*&quot;)/g,
                '<span class="syntax-string">$1</span>'
            );

            // Commands
            const bashCommands = [
                'docker', 'pull', 'run', 'echo', 'cd', 'ls', 'mkdir', 'chmod',
                'chown', 'grep', 'sed', 'awk', 'cat', 'tail', 'head', 'find',
                'ps', 'kill', 'service', 'systemctl', 'npm', 'yarn', 'git'
            ];

            bashCommands.forEach(cmd => {
                const regex = new RegExp(`\\b${cmd}\\b(?![^<]*</span>)`, 'g');
                highlighted = highlighted.replace(regex, `<span class="syntax-keyword">${cmd}</span>`);
            });
        }

        return highlighted;
    };

    return (
        <div className="relative my-6 rounded-lg border border-slate-700 bg-slate-900 overflow-hidden shadow-lg">
            {title && (
                <div className="flex items-center justify-between bg-slate-800 px-4 py-2 border-b border-slate-600">
                    <span className="text-sm font-medium text-slate-200">{title}</span>
                    <span className="text-xs text-slate-400 uppercase font-semibold bg-slate-700 px-2 py-1 rounded">
                        {language}
                    </span>
                </div>
            )}
            <div className="relative">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyToClipboard}
                    className="absolute top-3 right-3 z-10 h-8 w-8 p-0 transition-colors hover:bg-slate-700 focus:bg-slate-700"
                >
                    {copied ? (
                        <Check className="h-3 w-3 text-green-400" />
                    ) : (
                        <Copy className="h-3 w-3 text-slate-400 hover:text-slate-200" />
                    )}
                </Button>
                <pre className="p-4 text-sm overflow-x-auto bg-slate-900">
                    <code
                        className="font-mono leading-6 text-slate-100"
                        dangerouslySetInnerHTML={{
                            __html: highlightSyntax(code, language)
                        }}
                    />
                </pre>
            </div>


            <style>{`
                .syntax-keyword {
                    color: #ff6b9d;
                    font-weight: 600;
                }
                .syntax-string {
                    color: #a8e6cf;
                }
                .syntax-comment {
                    color: #7c7c7c;
                    font-style: italic;
                }
                .syntax-number {
                    color: #ffd93d;
                }
                .syntax-method {
                    color: #74c0fc;
                }
                .syntax-annotation {
                    color: #ff922b;
                    font-weight: 500;
                }
                .syntax-tag {
                    color: #ff6b9d;
                }
                .syntax-tag-name {
                    color: #74c0fc;
                    font-weight: 600;
                }
                .syntax-attr-name {
                    color: #ffd43b;
                }
                .syntax-attr-value {
                    color: #a8e6cf;
                }
                .syntax-operator {
                    color: #ff8787;
                }
                .syntax-yaml-key {
                    color: #74c0fc;
                    font-weight: 600;
                }
                .syntax-yaml-value {
                    color: #a8e6cf;
                }

                pre::-webkit-scrollbar {
                    height: 8px;
                }
                pre::-webkit-scrollbar-track {
                    background: #1e293b;
                }
                pre::-webkit-scrollbar-thumb {
                    background: #475569;
                    border-radius: 4px;
                }
                pre::-webkit-scrollbar-thumb:hover {
                    background: #64748b;
                }
            `}</style>
        </div>
    );
};