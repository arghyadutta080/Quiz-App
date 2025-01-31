import { baseURI } from '@/utils/constraints/constants';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch(`${baseURI}/Uw5CrX`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        // console.log(data);
        return NextResponse.json(data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Error fetching data' }, { status: 500  });
    }
}
