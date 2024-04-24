import { NextRequest, NextResponse } from 'next/server';

const innRegistry = [
  {
    inn: '1234567890',
    entity_type: 'SELF',
    code: '0987654321',
  },
  {
    inn: '112233445566',
    entity_type: 'MSP',
    code: '665544332211',
  },
];

export function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const inn = searchParams.get('inn');
  const code = searchParams.get('code');

  if (!(inn?.length == 10 || inn?.length == 12)) return invalidResponse();

  // const result = getResultFromBitrix(inn, code)
  const result = innRegistry.find((v) => {
    return v.inn == inn && v.code == code;
  });

  if (!result) return invalidResponse();

  return NextResponse.json(
    {
      ok: true,
      ...result,
    },
    { status: 200 },
  );
}

function invalidResponse() {
  return NextResponse.json({ ok: false }, { status: 403 });
}
