import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
    try {
        const { body, isValidSignature } = await parseBody<{ _type?: string }>(
            req,
            process.env.SANITY_REVALIDATE_SECRET,
        );

        if (!isValidSignature) {
            return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
        }

        if (!body?._type) {
            return NextResponse.json({ message: "Bad request" }, { status: 400 });
        }

        switch (body._type) {
            case "cv":
                revalidatePath("/cv");
                break;
            case "project":
                revalidatePath("/projects");
                break;
            default:
                revalidatePath("/cv");
                revalidatePath("/projects");
        }

        return NextResponse.json({ revalidated: true, type: body._type, now: Date.now() });
    } catch (err) {
        return NextResponse.json({ message: (err as Error).message }, { status: 500 });
    }
}
