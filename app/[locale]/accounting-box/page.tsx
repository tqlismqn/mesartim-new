import { Database, Shield, Clock, FolderSync, CheckCircle, HardDrive } from 'lucide-react';
import { ServicePage } from '@/components/templates/ServicePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Backup - Secure Data Protection',
  description: 'Automated, encrypted cloud backups for your critical business data. Never lose important files again.',
};

const features = [
  {
    icon: Shield,
    title: 'Military-Grade Encryption',
    description: 'Your data is encrypted both in transit and at rest using AES-256.',
  },
  {
    icon: Clock,
    title: 'Automated Daily Backups',
    description: 'Set it and forget it. Backups run automatically on your schedule.',
  },
  {
    icon: FolderSync,
    title: 'Version History',
    description: 'Restore files from any point in time with unlimited version history.',
  },
  {
    icon: HardDrive,
    title: 'Unlimited Storage',
    description: 'No caps on storage. Back up as much data as you need.',
  },
  {
    icon: CheckCircle,
    title: 'Easy Recovery',
    description: 'Restore individual files or entire systems with one click.',
  },
  {
    icon: Database,
    title: 'Geo-Redundant',
    description: 'Data replicated across multiple data centers for maximum reliability.',
  },
];

export default function CloudBackupPage() {
  return (
    <ServicePage
      title="Cloud Backup"
      subtitle="Never Lose Important Data Again"
      description="Automated, encrypted backups that run in the background. Protect your accounting data, documents, and critical files with enterprise-grade cloud storage."
      features={features}
      icon={Database}
      iconBg="bg-purple-100"
      iconColor="text-purple-600"
    />
  );
}
