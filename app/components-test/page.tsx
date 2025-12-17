import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Server } from 'lucide-react';

export default function ComponentsTest() {
  return (
    <div className="container-custom py-12 space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Card Component</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-4">
                <Server className="w-6 h-6" />
              </div>
              <CardTitle>Accounting Server</CardTitle>
              <CardDescription>
                High-performance remote desktop optimized for accounting software.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" size="sm">Learn More</Button>
            </CardFooter>
          </Card>

          <Card hover>
            <CardHeader>
              <CardTitle>Hover Card</CardTitle>
              <CardDescription>This card has hover effect enabled.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
