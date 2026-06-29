import { icons } from 'lucide-react'

export default function IconComponent({ name, color = 'var(--primary-plum)', ...props }) {
    const LucideIcon = icons[name];

    if (!LucideIcon) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn(`Icon "${name}" not found in lucide-react`);
        }
        return null;
    }

    return <LucideIcon {...props} color={color} />;
}
