import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#060606] text-[#E8E8E8] selection:bg-[#FF3333] selection:text-white pb-20 overflow-x-hidden relative font-sans">

      {/* BACKGROUND TEXTURE - Ominous glow */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,51,51,0.08)_0%,_transparent_50%)]"></div>

      {/* SCANLINES */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px]"></div>

      <div className="relative z-10">

        {/* HEADER */}
        <header className="flex justify-between items-center py-8 px-6 md:px-12 mb-20 border-b border-[#222222] font-mono text-[12px] font-bold tracking-[0.2em] text-[#888888] uppercase">
          <div className="flex gap-4 items-center">
            <div className="w-2 h-2 bg-[#FF3333] animate-pulse"></div>
            Q-DAY.NETWORK
          </div>
          <div className="hidden md:block">A Post-Quantum Threat Assessment</div>
        </header>

        {/* TIMELINE HERO */}
        <section className="px-6 md:px-12 mb-[120px] max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16">
            <div className="lg:col-span-3">
              <h1 className="font-mono font-bold text-[clamp(48px,8vw,100px)] text-[#FFFFFF] tracking-tighter leading-[0.9] mb-8">
                Q-DAY:<br />WHO SURVIVES?
              </h1>
              <h2 className="font-mono text-[16px] md:text-[20px] text-[#A0A0A0] tracking-[0.1em] uppercase border-l-2 border-[#FF3333] pl-6 py-2 mb-12">
                Post-Quantum Readiness:<br className="hidden md:block" /> Who can actually upgrade?
              </h2>
            </div>
          </div>
        </section>

        {/* TIMELINE BAR */}
        <div className="w-full border-y border-[#222222] bg-[#0A0A0A] mb-[120px]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between font-mono text-[13px] text-[#888888] gap-6">
            <div className="flex-1">
              <span className="text-[#FFFFFF] font-bold text-[16px]">2024</span><br />
              NIST FINALIZES PQC STANDARDS
            </div>
            <div className="flex-1 md:text-center text-[#FF3333] font-bold tracking-widest uppercase">
              The Gap: Who upgrades in time?
            </div>
            <div className="flex-1 md:text-right">
              <span className="text-[#FFFFFF] font-bold text-[16px]">20??</span><br />
              FIRST QUANTUM BREAK OF ECDSA
            </div>
          </div>
        </div>

        {/* 01 THE THREAT */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-[160px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <h3 className="font-mono font-bold text-[18px] text-[#FFFFFF] tracking-[0.15em] uppercase sticky top-8">
                01 —<br />The Threat
              </h3>
            </div>
            <div className="lg:col-span-7 font-sans font-light text-[20px] md:text-[24px] text-[#D0D0D0] leading-[1.6] space-y-12">
              <p>
                The threat timeline collapsed in February 2026. With the announcement of Iceberg Quantum's "Pinnacle Architecture," the estimated requirement to break RSA-2048 (and consequently ECC-256) plummeted to fewer than 100,000 physical qubits. The theoretical is now imminent.
              </p>
              <p>
                When a sufficiently powerful quantum computer runs Shor's algorithm against ECDSA, every public key ever exposed on a blockchain becomes a target. This includes every address that has ever sent a transaction — because sending requires revealing the public key.
              </p>
              <p>
                Funds begin moving. Not slowly. Within hours of the first confirmed break, automated systems will begin draining <span className="font-semibold text-[#FFFFFF]">every exposed wallet on every major network simultaneously.</span>
              </p>
              <p>
                The only defense is a pre-emptive migration to post-quantum cryptographic signatures. The math for this exists — NIST finalized standards in 2024<sup className="text-[#888888] text-[0.6em] ml-1">[1]</sup>. The problem is deploying it. And deployment requires something most blockchain networks don't have: an absolute mechanism to force a coordinated, mandatory upgrade without permanently splitting the chain.
              </p>
            </div>
          </div>
        </section>

        {/* DATA CALLOUT 1 */}
        <section className="mb-[160px] bg-[#0A0A0A] border-y border-[#222222]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center justify-center text-center">
            <div className="font-mono font-bold text-[clamp(80px,15vw,200px)] text-[#FFFFFF] leading-none tracking-tighter mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              4 YEARS
            </div>
            <div className="font-mono text-[16px] md:text-[20px] text-[#FF3333] uppercase tracking-[0.2em] font-bold max-w-[800px]">
              Time Bitcoin took to deploy Taproot — a relatively minor protocol upgrade.<sup className="text-[#888888] text-[0.6em] ml-1">[3]</sup>
            </div>
          </div>
        </section>

        {/* 02 THE DEFENSIVE DOWNGRADE (THE VISUAL) */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-[160px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <h3 className="font-mono font-bold text-[18px] text-[#FFFFFF] tracking-[0.15em] uppercase sticky top-8">
                02 —<br />The Defensive<br />Downgrade
              </h3>
            </div>
            <div className="lg:col-span-9">
              <div className="font-sans font-light text-[20px] md:text-[24px] text-[#D0D0D0] leading-[1.6] mb-16 max-w-[800px]">
                <p>
                  Post-quantum signatures are not a simple swap. An ML-DSA signature is 2,420 bytes — <span className="font-semibold text-[#FFFFFF]">38 times larger</span> than the 64-byte ECDSA signatures securing current networks.<sup className="text-[#888888] text-[0.6em] ml-1">[2]</sup>
                </p>
              </div>

              {/* THE CHUNKY PROPORTION VISUAL */}
              <div className="flex flex-col md:flex-row items-start md:items-end gap-16 mb-12">
                {/* Small block (64 bytes). 24x24 */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-[24px] h-[24px] bg-[#FFFFFF] shadow-[0_0_15px_rgba(255,255,255,0.6)]"></div>
                  <div className="font-mono text-[12px] text-[#888888] text-center">
                    <span className="text-[#FFFFFF] font-bold block mb-1">1×</span>
                    ECDSA<br />64 bytes
                  </div>
                </div>

                {/* Large block (2420 bytes). 38x area: sqrt(24*24 * 38) = sqrt(21888) = ~148px */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-[148px] h-[148px] bg-[#220000] border-2 border-[#FF3333] shadow-[0_0_40px_rgba(255,51,51,0.4)] relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,#FF3333_4px,#FF3333_8px)]"></div>
                    <span className="relative z-10 font-mono text-[#FF3333] text-[28px] font-black tracking-widest drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">BLOAT</span>
                  </div>
                  <div className="font-mono text-[12px] text-[#888888] text-center">
                    <span className="text-[#FF3333] font-bold block mb-1">38× AREA</span>
                    ML-DSA<br />2,420 bytes
                  </div>
                </div>
              </div>

              <div className="font-mono text-[14px] text-[#A0A0A0] uppercase tracking-widest border-l-2 border-[#333333] pl-6 max-w-[800px] leading-relaxed">
                Every transaction on a post-quantum blockchain carries this overhead. Networks that cannot definitively agree to upgrade will be forced to carry both protocols — or break.
              </div>
            </div>
          </div>
        </section>

        {/* DATA CALLOUT 2 */}
        <section className="mb-[160px] bg-[#0A0A0A] border-y border-[#222222]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center justify-center text-center">
            <div className="font-mono font-bold text-[clamp(80px,15vw,200px)] text-[#FFFFFF] leading-none tracking-tighter mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              $380B
            </div>
            <div className="font-mono text-[16px] md:text-[20px] text-[#FF3333] uppercase tracking-[0.2em] font-bold max-w-[800px]">
              Value currently sitting completely exposed in Bitcoin P2PK/P2PKH addresses.<sup className="text-[#888888] text-[0.6em] ml-1">[4]</sup>
            </div>
          </div>
        </section>

        {/* 03 THE SCORECARD (MERGED WITH CHAIN SCENARIOS) */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-[160px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <h3 className="font-mono font-bold text-[18px] text-[#FFFFFF] tracking-[0.15em] uppercase sticky top-8">
                03 —<br />Readiness<br />Assessment
              </h3>
            </div>
            <div className="lg:col-span-9">
              <div className="flex flex-col gap-8">

                {/* BITCOIN */}
                <div className="border border-[#333333] bg-[#0A0A0A] p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-[#222222] pb-6">
                    <h4 className="font-mono text-[32px] font-bold text-[#FFFFFF]">BITCOIN</h4>
                    <div className="font-mono text-[24px] font-bold text-[#FF3333] tracking-[0.2em] px-4 py-2 border border-[#FF3333]/30 bg-[#FF3333]/10">
                      VULNERABLE
                    </div>
                  </div>
                  <div className="font-sans font-light text-[18px] md:text-[20px] text-[#D0D0D0] leading-[1.6]">
                    <span className="text-[#FFFFFF] font-bold block mb-4">~4M BTC in P2PK addresses. Keys permanently exposed.</span>
                    Requires a social consensus hard fork with no mechanism to reliably force key migration. Proposals like BIP-360 or Pay-to-Merkle-Root remain opt-in soft forks, which experts estimate will take 7 to 15 years to achieve 90% wallet adoption. Satoshi's 1M BTC becomes completely unrecoverable or trivially stolen.
                  </div>
                </div>

                {/* ETHEREUM */}
                <div className="border border-[#333333] bg-[#0A0A0A] p-8 md:p-12 mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-[#222222] pb-6">
                    <h4 className="font-mono text-[32px] font-bold text-[#FFFFFF]">ETHEREUM</h4>
                    <div className="font-mono text-[24px] font-bold text-[#FF3333] tracking-[0.2em] px-4 py-2 border border-[#FF3333]/30 opacity-70">
                      FRAGILE
                    </div>
                  </div>
                  <div className="font-sans font-light text-[18px] md:text-[20px] text-[#D0D0D0] leading-[1.6]">
                    <span className="text-[#FFFFFF] font-bold block mb-4">Every EOA that ever sent a transaction has an exposed key.</span>
                    Requires a multi-year EIP process. Even with Account Abstraction (EIP-4337), performing post-quantum signature verification in smart contracts causes a 300% to 500% spike in gas costs. Every single DeFi contract inevitably requires complete redeployment.
                  </div>
                </div>

                {/* SOLANA */}
                <div className="border border-[#333333] bg-[#0A0A0A] p-8 md:p-12 mb-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-[#222222] pb-6">
                    <h4 className="font-mono text-[32px] font-bold text-[#FFFFFF]">SOLANA</h4>
                    <div className="font-mono text-[24px] font-bold text-[#FF3333] tracking-[0.2em] px-4 py-2 border border-[#FF3333]/30 opacity-70">
                      FRAGILE
                    </div>
                  </div>
                  <div className="font-sans font-light text-[18px] md:text-[20px] text-[#D0D0D0] leading-[1.6]">
                    <span className="text-[#FFFFFF] font-bold block mb-4">High performance relies on small signature sizes.</span>
                    Solana uses Ed25519 signatures. A forced upgrade to 2,420-byte ML-DSA signatures would expand transaction payloads massively, fundamentally crippling the high-throughput, low-bandwidth value proposition of the network and requiring monumental hardware requirements for validators.
                  </div>
                </div>

                {/* DECRED */}
                <div className="border-2 border-[#FFFFFF] bg-[#111111] p-8 md:p-12 relative overflow-hidden">
                  {/* Subtle highlight */}
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FFFFFF] opacity-[0.03] blur-[100px] rounded-full"></div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-[#444444] pb-6 relative z-10">
                    <h4 className="font-mono text-[32px] font-bold text-[#FFFFFF]">DECRED</h4>
                    <div className="font-mono text-[24px] font-bold text-[#0A0A0A] bg-[#FFFFFF] tracking-[0.2em] px-4 py-2">
                      READY
                    </div>
                  </div>
                  <div className="font-sans font-light text-[18px] md:text-[20px] text-[#D0D0D0] leading-[1.6] relative z-10">
                    <span className="text-[#FFFFFF] font-bold block mb-4">Binding on-chain vote forces protocol upgrade with an enforced deadline.</span>
                    Legacy addresses securely migrated safely without hard fork delays. The network coordinates and upgrades synchronously.
                  </div>

                  {/* Decred step-by-step embedded in the DCR card */}
                  <div className="mt-12 pt-8 border-t border-[#333333] relative z-10">
                    <h5 className="font-mono font-bold text-[14px] text-[#A0A0A0] uppercase tracking-widest mb-8">The Migration Path</h5>
                    <div className="font-mono text-[14px] flex flex-col gap-6 pl-4 border-l-2 border-[#333333]">
                      <div className="flex gap-6 items-start">
                        <span className="text-[#A0A0A0] font-bold w-6">01</span>
                        <span className="text-[#D0D0D0]">Developers ship PQC signature scheme as dormant code to the network nodes.</span>
                      </div>
                      <div className="flex gap-6 items-start">
                        <span className="text-[#A0A0A0] font-bold w-6">02</span>
                        <span className="text-[#D0D0D0]">DCP proposal is published for the stakeholder network to review.</span>
                      </div>
                      <div className="flex gap-6 items-start">
                        <span className="text-[#A0A0A0] font-bold w-6">03</span>
                        <span className="text-[#D0D0D0]">Stakeholders vote directly on-chain — <span className="text-[#FFFFFF] font-bold">a binding 75% approval threshold is required.</span></span>
                      </div>
                      <div className="flex gap-6 items-start">
                        <span className="text-[#A0A0A0] font-bold w-6">04</span>
                        <span className="text-[#FFFFFF] font-bold bg-[#FFFFFF]/10 px-2 py-1 -ml-2 rounded">Activation locks in at a predetermined block height.</span>
                      </div>
                      <div className="flex gap-6 items-start">
                        <span className="text-[#A0A0A0] font-bold w-6">05</span>
                        <span className="text-[#D0D0D0]">Grace period begins. Legacy addresses generate and migrate to their quantum-safe keys.</span>
                      </div>
                      <div className="flex gap-6 items-start">
                        <span className="text-[#FF3333] font-bold w-6 animate-pulse">06</span>
                        <span className="text-[#FF3333] font-bold bg-[#FF3333]/10 px-2 py-1 -ml-2 rounded border border-[#FF3333]/30">DEADLINE ENFORCED. No stragglers. No permanent chain splits.</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 04 PROOF OF EXECUTION */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-[160px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <h3 className="font-mono font-bold text-[18px] text-[#FFFFFF] tracking-[0.15em] uppercase sticky top-8">
                04 —<br />Proof of<br />Execution
              </h3>
            </div>
            <div className="lg:col-span-9 font-sans font-light text-[20px] md:text-[24px] text-[#D0D0D0] leading-[1.6] space-y-12 max-w-[800px]">
              <p>
                Decred's readiness is not theoretical. In December 2021, the integration of Streamlined NTRU Prime 4591 alongside the classical x25519 key exchange was successfully deployed to the Decred mainnet.<sup className="text-[#888888] text-[0.6em] ml-1">[5]</sup>
              </p>
              <p>
                By actively deploying code rather than relying entirely on multi-year roadmaps, Decred demonstrates the foundational agility required to survive the post-quantum transition. The governance infrastructure that allowed this upgrade to happen seamlessly currently sits waiting to ratify the inevitable signature replacement hard fork.
              </p>

              <div className="mt-12 p-8 bg-[#0A0A0A] border border-[#333333] font-mono text-[14px] md:text-[16px] text-[#A0A0A0] break-words">
                <a href="https://github.com/decred/cspp/commit/d2b9cb" className="block mb-4 hover:text-[#FFFFFF] transition-colors">
                  <span className="text-[#FF3333]">#</span> COMMIT: github.com/decred/cspp/commit/d2b9cb...
                </a>
                <a href="https://blog.decred.org/2021/12/28/Decred-Journal-December-2021" className="block hover:text-[#FFFFFF] transition-colors">
                  <span className="text-[#FF3333]">#</span> RELEASE: blog.decred.org/2021/12/28/Decred-Journal...
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GUT PUNCH CLOSE & CTA */}
        <section className="bg-[#0A0A0A] border-y border-[#222222] border-b-0">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center justify-center text-center">
            <div className="font-sans font-light text-[32px] md:text-[48px] lg:text-[64px] text-[#FFFFFF] leading-[1.2] max-w-[1200px] mb-16">
              The networks that survive <span className="font-bold text-[#FF3333]">Q-Day</span> will be the ones that can vote to save themselves.
            </div>

            <div className="flex flex-col sm:flex-row gap-6 font-mono text-[14px] uppercase tracking-widest font-bold">
              <a href="https://github.com/decred/dcrd" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#FFFFFF] text-[#000000] hover:bg-[#FF3333] hover:text-[#FFFFFF] transition-colors flex items-center justify-center gap-3">
                Verify Source Code <ArrowRight size={16} />
              </a>
              <a href="https://proposals.decred.org/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-[#333333] text-[#FFFFFF] hover:border-[#FFFFFF] hover:bg-[#111111] transition-colors flex items-center justify-center gap-3">
                See Governance In Action <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* FOOTNOTES / SOURCES */}
        <section className="bg-[#0A0A0A] border-y border-[#222222] py-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <h3 className="font-mono font-bold text-[16px] text-[#666666] tracking-[0.1em] uppercase mb-8">
              Sources & Citations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-[12px] text-[#888888] leading-relaxed">
              <div>
                <ol className="list-decimal pl-4 space-y-4">
                  <li>
                    <strong className="text-[#A0A0A0]">NIST Finalizes PQC Standards (2024):</strong> FIPS 204 published by the National Institute of Standards and Technology officially standardized ML-DSA.
                    <a href="https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-[#FFFFFF] block mt-1 break-all transition-colors">[Link to NIST release]</a>
                  </li>
                  <li>
                    <strong className="text-[#A0A0A0]">ML-DSA vs ECDSA Signature Sizes:</strong> FIPS 204 specifies ML-DSA-44 signatures are 2,420 bytes. Standard ECDSA/Ed25519 signatures are 64 bytes. (2420 / 64 = 37.8x).
                  </li>
                  <li>
                    <strong className="text-[#A0A0A0]">Bitcoin Taproot Timeline (~4 years):</strong> The Taproot upgrade (BIP 341) was formally proposed by Pieter Wuille in January 2018 and activated on the network at block 709,632 in November 2021.
                  </li>
                </ol>
              </div>
              <div>
                <ol className="list-decimal pl-4 space-y-4" start={4}>
                  <li>
                    <strong className="text-[#A0A0A0]">Exposed Value in Bitcoin:</strong> The "$380B" figure assumes a rough estimate of ~4 million BTC resting in early P2PK/P2PKH addresses with fully exposed public keys (including the ~1.1 million associated with the Satoshi Nakamoto miner entities), calculated at ~$95,000/BTC.
                  </li>
                  <li>
                    <strong className="text-[#A0A0A0]">Decred Post-Quantum Readiness:</strong> In Dec 2021, Decred activated a hybrid post-quantum key exchange (Streamlined NTRU Prime 4591 / x25519) without splitting the network, relying on its binding on-chain governance system.
                    <a href="https://blog.decred.org/2021/12/28/Decred-Journal-December-2021" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-[#FFFFFF] block mt-1 break-all transition-colors">[Link to Decred Journal]</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[12px] text-[#666666] uppercase tracking-widest pb-12">
        <div>PUBLISHED FEBRUARY 2026 · Q-DAY.NETWORK</div>
        <div className="flex items-center gap-2">
          SEE ALSO: <a href="https://decred.supply" className="text-[#A0A0A0] hover:text-[#FFFFFF] transition-colors flex items-center gap-1 border-b border-[#333333] pb-1">DECRED.SUPPLY <ArrowRight size={12} /></a>
        </div>
      </footer>

    </div>
  );
}

export default App;
